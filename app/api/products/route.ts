import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const categoryId = searchParams.get("category")

  try {
    // Construct the API URL with the category filter if provided
    const apiUrl = "https://api.producthunt.com/v2/api/graphql"

    // GraphQL query to fetch products
    const query = `
      query {
        posts(first: 20 ${categoryId ? `, topic: "${categoryId}"` : ""}) {
          edges {
            node {
              id
              name
              tagline
              thumbnail {
                url
              }
              votesCount
              topics {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    `

    // Make the request to Product Hunt API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PRODUCT_HUNT_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    // Check if the expected data structure exists
    if (!data?.data?.posts?.edges) {
      console.error("Unexpected API response format:", data)
      return NextResponse.json([], { status: 200 }) // Return empty array
    }

    // Transform the data to rename upvotes to engagements
    const transformedProducts = data.data.posts.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
      tagline: edge.node.tagline,
      thumbnail: edge.node.thumbnail?.url || null,
      engagements: edge.node.votesCount, // Renamed from votesCount to engagements
      categories: edge.node.topics.edges.map((topicEdge: any) => ({
        id: topicEdge.node.id,
        name: topicEdge.node.name,
      })),
    }))

    return NextResponse.json(transformedProducts)
  } catch (error) {
    console.error("Error fetching products:", error)
    // Return an empty array instead of an error object
    return NextResponse.json([], { status: 200 })
  }
}

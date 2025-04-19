import { NextResponse } from "next/server"

export async function GET() {
  try {
    // GraphQL query to fetch categories (topics in Product Hunt)
    const query = `
      query {
        topics(first: 30) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `

    // Make the request to Product Hunt API
    const response = await fetch("https://api.producthunt.com/v2/api/graphql", {
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
    if (!data?.data?.topics?.edges) {
      console.error("Unexpected API response format:", data)
      return NextResponse.json([], { status: 200 }) // Return empty array
    }

    // Transform the data to a simpler format
    const categories = data.data.topics.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
    }))

    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    // Return an empty array instead of an error object
    return NextResponse.json([], { status: 200 })
  }
}

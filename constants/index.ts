import { Search, Workflow, Users } from "lucide-react";

export const navLinks = [
    {
        id: 0,
        url: '/',
        item: 'Solutions',
    },
    {
        id: 0,
        url: '/',
        item: 'Pricing',
    },
    {
        id: 0,
        url: '/',
        item: 'Entreprise',
    }

]

export const adminSidebarLinks = [
  {
    img: "/assets/icons/bookmark.svg",
    route: '/dashboard',
    text: "Overview"
  },
  {
    img: "/assets/icons/play-circle.svg",
    route: '/dashboard',
    text: "Trends"
  },
  {
    img: "/assets/icons/bookmark.svg",
    route: '/dashboard',
    text: "Discover"
  },
  {
    img: "/assets/icons/play-circle.svg",
    route: '/dashboard',
    text: "For You"
  },
  {
    img: "/assets/icons/bookmark.svg",
    route: '/dashboard',
    text: "Insights"
  },
  {
    img: "/assets/icons/bookmark.svg",
    route: '/dashboard',
    text: "Community"
  },
  {
    img: "/assets/icons/bookmark.svg",
    route: '/dashboard',
    text: "Creator (Pro)"
  }

]

  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'Scrabble SandBox',
        'Blog',
        'Policy',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Tooling', 'Feedback', 'Channels'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  export const features = [
    {
      icon: Search,
      title: "Discover Tools",
      description: "Find the perfect digital tools for your business needs in seconds.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Workflow,
      title: "Create Workflows",
      description: "Build and share custom workflow guides to streamline your processes.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Build Communities",
      description: "Connect with like-minded professionals and share knowledge.",
      color: "bg-purple-100 text-purple-600",
    },
  ]

 export const workflows = [
    {
      id: "1",
      title: "Morning Productivity Routine",
      description: "My step-by-step process to start the day with maximum productivity",
      steps: [
        "Wake up at 5:30 AM",
        "Drink a glass of water",
        "10 minutes of meditation",
        "30 minutes of exercise",
        "Shower and get ready",
        "Plan the day's tasks",
      ],
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      likes: 24,
      comments: 5,
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    },
    {
      id: "2",
      title: "Content Creation Pipeline",
      description: "How I create and schedule content across multiple platforms efficiently",
      steps: [
        "Research trending topics",
        "Outline 3-5 content pieces",
        "Record video content",
        "Edit and optimize for each platform",
        "Schedule posts using Buffer",
        "Engage with comments for 30 minutes after posting",
      ],
      author: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      likes: 42,
      comments: 8,
      createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    },
    {
      id: "3",
      title: "Weekly Review Process",
      description: "My end-of-week review to stay on track with goals and improve productivity",
      steps: [
        "Review completed tasks and achievements",
        "Identify incomplete tasks and blockers",
        "Update project timelines",
        "Plan next week's priorities",
        "Journal lessons learned",
        "Clear inbox to zero",
      ],
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      likes: 18,
      comments: 3,
      createdAt: new Date().toISOString(), // Today
    },
  ]
  
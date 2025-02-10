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
  
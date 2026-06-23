export const projects = [
    {
      id: 1,
      title: "KIDU — Screen-Free Audio Learning System",
      description: "Full-stack IoT ecosystem for a children's audio player. Reverse-engineered proprietary firmware protocol, replaced defunct AWS IoT cloud with a self-hosted MQTT broker, built Flutter mobile app with BLE GATT device pairing, DNS interception tool, and NestJS backend with JWT auth, MinIO storage, and OTA firmware updates.",
      image: "/images/projects/kidu.png",
      tags: ["Flutter", "BLoC", "NestJS", "MQTT", "BLE/GATT", "PostgreSQL", "MinIO", "Docker", "FFmpeg", "WinDivert"],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: 2,
      title: "PMC — Project Management & Cost Control",
      description: "Enterprise platform for construction/engineering project budgeting, resource planning, and cost forecasting. Cross-platform Flutter frontend (Web, Windows, macOS, iOS, Android) with AI chat module using MCP protocol, real-time SignalR notifications, and React + TypeScript embedded modules.",
      image: "/images/projects/pmc.png",
      tags: ["Flutter", "Riverpod", "React", "TypeScript", "MCP", "Node.js", "SignalR", "LLM", "Clean Architecture"],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: 3,
      title: "Planeroo — AI-Powered Study Planner",
      description: "Smart homework & study planner for children where parents scan homework sheets to generate AI study plans. Features gamification (XP, badges, streaks), AI chat assistant, and revision sheet generation powered by OpenAI.",
      image: "/images/projects/planeroo.png",
      tags: ["Flutter", "Riverpod", ".NET 10", "PostgreSQL", "OpenAI", "Docker", "Clean Architecture"],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: 4,
      title: "Takwira — Football Reservation Platform",
      description: "Real-time football field reservation platform with instant messaging, user authentication, scheduling system, and field management tools.",
      image: "/images/projects/takwira.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 5,
      title: "Tendresse.tn",
      description: "Live e-commerce platform with product catalog, secure Stripe payments, and responsive storefront.",
      image: "/images/projects/tendresse.png",
      tags: ["React", "Tailwind CSS", "Stripe", "Redux", "Firebase"],
      github: "",
      demo: "https://tendresse.tn",
      featured: false
    }
  ];
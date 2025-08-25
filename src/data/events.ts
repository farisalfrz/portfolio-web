export type TechEvent = {
  id: number;
  title: string;
  description: string;
  highlights?: string[];
  imageUrls: string[];
  date: string;
  location: string;
};

export const eventsData: TechEvent[] = [
  {
    id: 1,
    title: "DevFest Bandung 2023",
    description:
      "An immersive, community-driven conference organized by Google Developer Groups (GDG). The 2023 edition offered diverse tracks covering Android, Flutter, Cloud, AI/ML, Firebase, and Web technologies. I engaged in sessions led by seasoned industry professionals, gaining hands-on insights into modern development practices and the latest updates from the Google ecosystem.",
    imageUrls: ["/events/devfest-2023.jpg",
                "/events/fotbar-devfest-2023.jpg"], 
    date: "December 2023",
    location: "Bandung, Indonesia",
  },
  {
    id: 2,
    title: "BandungDev Tech Meetup 2024",
    description:
      "A focused meetup hosted by the Bandung developer community, aimed at bridging the gap between academia and the professional IT industry. The event featured insightful discourse from some of Indonesia's most renowned figures in tech education and development, including Sandhika Galih, Eko Kurniawan Khaenedy, Erico Darmawan, and Faqihza Mukhlish. Discussions centered on translating theoretical knowledge into practical, industry-ready skills.",
    imageUrls: ["/events/bandungdev.JPG",
                "/events/bandungdev-speakers.jpg",
                "/events/bandungdev-sandhikagalih.jpg",
                "/events/bandungdev-paeko.jpg"], 
    date: "February 2024",
    location: "Bandung, Indonesia",
  },
  {
    id: 3,
    title: "DevFest Bandung 2024",
    description: "Returned to the vibrant atmosphere of DevFest Bandung for its 2024 edition. This year's conference was even more comprehensive, allowing me to deepen my knowledge across several specialized tracks led by industry experts. Key themes included:",
    highlights: [ 
      "AI / ML: Bringing the power of AI to modern applications and workflows.",
      "Mobile: Developing for a range of audiences and form factors.",
      "Web: Creating fast, secure, and accessible applications for the open web.",
      "Firebase: Building and running modern, AI-powered user experiences.",
      "UI/UX: Crafting user-friendly interfaces that meet both user needs and business goals."
    ],
    imageUrls: ["/events/devfest-2024.jpg",
                "/events/fotbar-devfest-2024.jpg",
                "/events/fotbar2-devfest-2024.jpg"], 
    date: "December 2024",
    location: "Bandung, Indonesia",
  },
];
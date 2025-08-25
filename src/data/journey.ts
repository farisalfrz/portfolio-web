export type JourneyItem = {
    id: number;
    year: string;
    title: string;
    description: string;
};

export const journeyData: JourneyItem[] = [
    {
        id: 1,
        year: "Semester 1 (2022)",
        title: "The Beginning: Algorithms & Data Structures",
        description:
            "My journey began with the fundamentals, building the logical foundation for everything to come.",
    },
    {
        id: 2,
        year: "Early 2023",
        title: "My First Website: Favorite Basketball Players",
        description:
            "Putting theory into practice, I built my first static website using HTML, CSS, and JavaScript, sparking my passion for web development.",
    },
    {
        id: 3,
        year: "2023",
        title: "Second Project: Formula One Website",
        description:
            "Building on my initial experience, my second web project involved more complex layouts and interactions.",
    },
    {
        id: 4,
        year: "2024",
        title: "Diving into the Backend with Dicoding",
        description:
            "I expanded my skills to the server-side, mastering Node.js, Express.js, and the principles of building robust RESTful APIs.",
    },
    {
        id: 6,
        year: "2024-2025",
        title: "Entering the AI/ML Phase",
        description:
            "Through university courses, I delved into the world of data science, learning to extract insights and build intelligent systems.",
    },
    {
        id: 7, 
        year: "2025",
        title: "Entering the Professional World: Intern & Part-Time Roles",
        description:
        "I took my first steps into the professional industry by securing an internship at Bapperida Kota Bandung and a part-time role as a Coding Instructor at Kalananti by Ruangguru. This phase was crucial for applying my skills in real-world environments.",
  },
    {
        id: 8,
        year: "2025",
        title: "Project: Chatbot for Bapperida",
        description:
            "I applied my AI skills to develop a simple chatbot for the Bandung City Bapperida to answer frequently asked questions.",
    },
    {
        id: 9,
        year: "2025",
        title: 'Capstone Project: "Ril or Fek"',
        description:
            "The culmination of my skills: a full-stack app leveraging data science and ML to detect misinformation, combining frontend, backend, and AI.",
    },
];
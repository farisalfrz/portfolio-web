export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrls: string[];
    tags: string[];
    liveUrl?: string;
    codeUrl?: string;
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: "First Website: Favorite Basketball Players",
        description:
            "My very first website about my favorite basketball players of all time.",
        imageUrls: ["/projects/first-website.png"],
        tags: ["HTML", "CSS"],
        liveUrl: "https://farisalfrz.github.io/",
        codeUrl: "https://github.com/farisalfrz/farisalfrz.github.io",
    },
    {
        id: 2,
        title: "Second Project: Formula One Website",
        description:
            "My second web project, a website dedicated to Formula One racing. Because I love F1.",
        imageUrls: ["/projects/second-website.png"],
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://farisalfrz.github.io/WEB_10122139_FarisAlfarizi_PABCL2024/",
        codeUrl: "https://github.com/farisalfrz/WEB_10122139_FarisAlfarizi_PABCL2024",
    },
    {
        id: 3,
        title: "Chatbot for Bapperida",
        description:
            "A simple chatbot designed to answer frequently asked questions for the Bandung City BAPPERIDA.",
        imageUrls: ["/projects/chatbot.png"],
        tags: ["React", "CSS", "HTML", "JavaScript"],
        liveUrl: "https://chatbot-bapperida.farisalfarizi.my.id/",
        codeUrl: "https://github.com/farisalfrz/chatbot-bapperida",
    },
    {
        id: 4,
        title: "Ril or Fek - Hoax Detection Web App",
        description:
            "A full-stack web application that leverages Machine Learning to classify news as real or fake, helping to combat misinformation.",
        imageUrls: ["/projects/ril-or-fek-light.png",
                    "/projects/ril-or-fek-dark.png"],
        tags: ["React", "Python", "Scikit-learn", "IndoBERT", "Machine Learning", "Transformers", "PyTorch", "FastAPI", "Tailwind CSS"],
        liveUrl: "https://rof.farisalfarizi.my.id/",
        codeUrl: "https://github.com/farisalfrz/ril-or-fek-project",
    },
    {
        id: 5,
        title: "This Portfolio Website",
        description:
            "My personal corner of the internet. An interactive portfolio built with modern web technologies to showcase my journey and skills.",
        imageUrls: ["/projects/portfolio.png"],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://farisalfarizi.my.id/",
        codeUrl: "https://github.com/farisalfrz/portfolio-web",
    },
    {
        id: 6,
        title: "Coming Soon...",
        description:
            "I'm currently brewing something new and exciting. Stay tuned for updates on my next project!",
        imageUrls: ["/projects/coming-soon.png"],
        tags: ["Future Tech"],
    },
];

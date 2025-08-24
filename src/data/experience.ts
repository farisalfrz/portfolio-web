export type WorkExperience = {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
};

export const experienceData: WorkExperience[] = [
    {
        id: 1,
        role: "Web Developer & Social Media Intern",
        company: "Bapperida Kota Bandung",
        period: "August 1st 2025 - September 30th 2025",
        description: [
            "Developed and maintained new features for the 'E-BMD' (Electronic Regional Property) asset management system.",
            "Engineered the barcode sticker printing feature for all registered assets.",
            "Built the user interface for the asset maintenance and asset deletion pages.",
            "Brainstorming and developing weekly content ideas for the official Bapperida Instagram account.",
            "Designing and creating visually appealing posters for posts to effectively communicate our messages to the public.",
        ],
    },
    {
        id: 2,
        role: "Part-time Coding Instructor",
        company: "Kalananti by Ruangguru",
        period: "August 2025 - Present",
        description: [
            "Mentored and instructed high school students (grades 10-11) in Python programming fundamentals.",
            "Delivered engaging lessons on core programming concepts, from variables to simple algorithms.",
            "Guided students in creating their first command-line application projects.",
        ],
    },
];
import { FaBootstrap, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaPhp } from 'react-icons/fa';
import { SiJupyter, SiGooglecolab, SiMongodb, SiPostman, SiW3Schools, SiTableau, SiVite, SiFastapi, SiNextdotjs, SiTailwindcss, SiTypescript, SiPandas, SiNumpy, SiScikitlearn, SiExpress, SiMysql, SiPytorch, SiJavascript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { IconType } from 'react-icons';

export type Skill = {
    name: string;
    icon: IconType;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

export type Certification = {
    name: string;
    issuer: string;
    link: string;
    imageUrl: string;
}

// Data untuk Skill
export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", icon: FaPython },
            { name: "Java", icon: FaJava },
            { name: "PHP", icon: FaPhp },
            { name: "JavaScript", icon: SiJavascript },
            { name: "CSS", icon: FaCss3Alt },
            { name: "SQL", icon: TbSql },
        ],
    },
    {
        title: "Frontend Development",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vite", icon: SiVite },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "W3.CSS", icon: SiW3Schools },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
        ],
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "RESTful APIs", icon: FaDatabase },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Postman", icon: SiPostman },
        ],
    },
    {
        title: "Data & AI/ML",
        skills: [
            { name: "MySQL", icon: SiMysql },
            { name: "Tableau", icon: SiTableau },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Jupyter", icon: SiJupyter },
            { name: "Google Colab", icon: SiGooglecolab },
            { name: "Python", icon: FaPython },
            { name: "Pandas", icon: SiPandas },
            { name: "NumPy", icon: SiNumpy },
            { name: "Scikit-learn", icon: SiScikitlearn },
            { name: "PyTorch", icon: SiPytorch },
        ],
    },
];

// Data untuk Sertifikasi 
export const certifications: Certification[] = [
    {
        name: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        link: "https://www.credly.com/badges/25d03564-8510-4d00-81d0-0d95ecb1fed8/",
        imageUrl: "/certificates/ccna.png"
    },
    {
        name: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding",
        link: "https://www.dicoding.com/certificates/2VX342OGQZYQ",
        imageUrl: "/certificates/dicoding-javascript.jpg"
    },
    {
        name: "Belajar Back-End Pemula dengan JavaScript",
        issuer: "Dicoding",
        link: "https://www.dicoding.com/certificates/JMZV49VNOXN9",
        imageUrl: "/certificates/dicoding-backend.png"
    },
]
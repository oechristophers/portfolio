const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Univelcity Tech",
        degree: "Certificate Of Competence",
        detail: "Completed Frontend with React",
        year: "2023-2024",
      },
      {
        id: 1,
        title: "Univelcity Tech",
        degree: "Certificate Of Competence",
        detail: "Completed Backend with Python.",
        year: "2023-2024",
      },
      {
        id: 2,
        title: "Covenant University",
        degree: "Bachelor Of Computer Science",
        detail: "CCodel Computer Science",
        year: "On going",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Univelcity",
        role: "Frontend Intern",
        url: "https://univelcity.com/",
        desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "011/2023 - 07/2024",
        location: "Lagos, Nigeria",
      },
      {
        id: 2,
        title: "Univelcity",
        role: "Backend Intern",
        url: "https://univelcity.com/",
        desc: "Interned as a backend developer with Python DRF,there I learned how to do CRUD'S operations in Python.",
        year: "011/2023 - 07/2024",
        location: "Lagos, Nigeria",
      },
      {
        id: 3,
        title: "Mentorled Uk",
        role: "Frontend Developer",
        url: "https://www.mentorled.com/",
        desc: "Lead a team of frontend interns in building real-life projects for UK-based clients, ensuring successful project delivery within deadlines.",
        year: "09/2024 - Date",
        location: "Remote, United Kingdom",
      },
      {
        id: 4,
        title: "VampAI",
        role: "Frontend Developer",
        url: "https://www.usevampai.com/",
        desc: "At VAMPAI, I work closely with the CTO to build a modern recruitment platform powered by AI. I lead and contribute to features such as AI-driven candidate matching, CV enhancement, and smart suggestion systems. My stack includes Next.js, React, Redux Toolkit (RTK), ShadCN UI, NestJS, TypeORM, and SQL, with responsibilities spanning both frontend and backend development. I also handle API design, integration of external AI services, and performance optimization across the app.",
        year: "03/2025 - Date",
        location: "Remote, United Kingdom",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}

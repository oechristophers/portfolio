const portfolio = [
  {
    id: 0,
    projectName: "Rivvett",
    url: "https://rivvett.vercel.app/",
    image: "/projects/rivvett.png",
    projectDetail:
      "Rivvett is a denim store dedicated to timeless style, quality, and versatile fashion. We believe denim is more than fabric—it’s a lifestyle. Our collection offers classic and contemporary designs tailored for every body type and aesthetic.",
    technologiesUsed: [
      {
        tech: "NextJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Styled Components",
      },
      {
        tech: "NextAuth",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "We-Tube",
    url: "https://video-892c6.firebaseapp.com/",
    image: "/projects/we-tube.png",
    projectDetail:
      "WeTube is a MERN stack-based platform for uploading, streaming, and interacting with videos. It features user authentication, video recommendations, comments, likes, and subscriptions, delivering a seamless, responsive experience for creators and viewers alike.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Vite",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Styled Components",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Firebase",
      },
      {
        tech: "NodeJS",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}

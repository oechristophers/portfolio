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
    projectName: "Veegil Bank",
    url: "https://veegilfe.netlify.app/",
    image: "/projects/veegil-bank.png",
    projectDetail:
      "VeegiLFE is a full-featured mock banking application that replicates real-world banking functionality without handling actual funds. Built with NestJS, MongoDB, Next.js, React, Redux Toolkit, ShadCN UI, and Tailwind CSS, it features real-time transaction updates, a dynamic transaction history with intuitive badges, and a clean, responsive user interface. This project demonstrates advanced skills in full-stack development, real-time data handling, and modern UI design.",
    technologiesUsed: [
      {
        tech: "NextJS",
      },
      {
        tech: "ShadCN UI",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Redux Toolkit",
      },
      {
        tech: "NestJS",
      },
      {
        tech: "MongoDB",
      },
    ],
  },
  
  {
    id: 0,
    projectName: "AI Chatbot",
    url: "https://chatbot-test-ygrf.onrender.com/",
    image: "/projects/ai-chatbot.png",
    projectDetail:
      "AI Customer Service Chatbot is a rule-based intelligent assistant built with Python and Flask, designed to deliver instant customer support. It leverages pattern matching and natural language processing (NLP) to interpret user intents and generate accurate, context-aware responses. This project showcases practical applications of AI in customer service automation, combining backend logic with conversational intelligence.",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "Flask",
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

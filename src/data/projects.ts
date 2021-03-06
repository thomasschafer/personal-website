import { v4 as uuidv4 } from "uuid";

export type projectType = {
  title: string;
  subtitle: string;
  link: string;
  githubLinks?: Array<string>;
  description: Array<string>;
  imagePath: string;
  projectId: string;
};

export const projectData: Array<projectType> = [
  {
    title: "kobble.io",
    subtitle: "Chat application",
    link: "https://kobble.io",
    githubLinks: [
      "https://github.com/thomasschafer/chat-app-frontend",
      "https://github.com/thomasschafer/chat-app-backend",
    ],
    description: [
      "Backend built using Node.js with TypeScript, using MongoDB as a database",
      "Frontend built using React with TypeScript, and styled using TailwindCSS",
      "Backend hosted on Digital Ocean, utilising Docker and Nginx",
      "Frontend hosted on Netlify",
    ],
    imagePath: "images/kobble_screenshot.png",
    projectId: uuidv4(),
  },
];

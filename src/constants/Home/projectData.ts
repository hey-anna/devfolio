interface Project {
  name: string;
  description: string;
  tech: string[];
  links?: { type: string; url: string; action?: "navigate" | "download" | "text" | "image" | "external" }[];
}

export const projectData: Project[] = [
  {
    name: "Recently",
    description: "최근 작업한 프로젝트",
    tech: ["React", "TypeScript", "Styled Components"],
    links: [
      { type: "커피물류플랫폼", url: "https://github.com/your-repo", action: "external" },
      { type: "Live Site", url: "https://your-site.netlify.app", action: "external" },
      { type: "Live Site", url: "https://your-site.netlify.app", action: "external" },
    ],
  },
  {
    name: "Mini / Side",
    description: "스터디 및 개인 실험적인 프로젝트",
    tech: ["Vite", "Zustand", "Tailwind CSS"],
    links: [
      { type: "GitHub", url: "https://github.com/your-repo", action: "external" },
      { type: "Live Site", url: "https://your-site.netlify.app", action: "external" },
    ],
  },
  {
    name: "Publishing",
    description: "퍼블리싱",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { type: "GitHub", url: "https://github.com/your-repo", action: "external" },
      { type: "Live Site", url: "https://your-site.netlify.app", action: "external" },
    ],
  },
  {
    name: "Design",
    description: "모바일 앱 UIUX 디자인",
    tech: ["Figma", "Sketch"],
    links: [{ type: "Figma Design", url: "https://figma.com/your-design", action: "external" }],
  },
];

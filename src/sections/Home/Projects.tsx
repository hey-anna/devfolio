import { Icon } from "@iconify/react";
import styled from "styled-components";
import { projectData } from "../../constants/Home/projectData";

const ProjectContainer = styled.section`
  text-align: center;
  padding: 3rem 2rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin: 0.5rem 0;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: #007acc;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const handleLinkClick = (link: { type: string; url: string; action?: string }) => {
    if (link.action === "download") {
      const a = document.createElement("a");
      a.href = link.url;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (link.action === "image") {
      window.open(link.url, "_blank");
    }
  };

  return (
    <ProjectContainer>
      <h2>프로젝트</h2>
      <ProjectList>
        {projectData.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </TechList>
            {project.links?.map((link) =>
              link.action === "text" ? (
                <p key={link.url}>{link.type}</p>
              ) : (
                <ProjectLink
                  key={link.url}
                  href={link.action === "external" || link.action === "navigate" ? link.url : "#"}
                  onClick={(e) => {
                    if (link.action && link.action !== "navigate" && link.action !== "external") {
                      e.preventDefault();
                      handleLinkClick(link);
                    }
                  }}
                  target={link.action === "external" ? "_blank" : "_self"}
                >
                  <Icon
                    icon={
                      link.type === "GitHub"
                        ? "mdi:github"
                        : link.type === "Live Site"
                        ? "mdi:web"
                        : link.type === "Figma Design"
                        ? "mdi:figma"
                        : link.action === "download"
                        ? "mdi:download"
                        : link.action === "image"
                        ? "mdi:image"
                        : "mdi:link"
                    }
                  />
                  {link.type}
                </ProjectLink>
              )
            )}
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectContainer>
  );
};

export default Projects;

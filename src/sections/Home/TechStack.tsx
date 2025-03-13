import { Icon } from "@iconify/react";
import styled from "styled-components";

const TechContainer = styled.section`
  text-align: center;
  padding: 3rem 2rem;
`;

const TechList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #007acc, #00c6ff);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  width: 7rem;
  height: 7rem;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #00c6ff, #007acc);
  }
`;

const TechTitle = styled.h2`
  font-size: 1rem;
  //   color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;

const TechText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const TechIcon = styled(Icon)`
  font-size: 3rem;
  width: 4rem;
  height: 3rem;
  flex-shrink: 0;
`;

const techs = [
  { name: "React", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Styled Components", icon: "devicon:styledcomponents" },
  { name: "Zustand", icon: "/icons/zustand-mascot.svg" },
  { name: "TanStack Query", icon: "/icons/tanstack-query.png" },
  { name: "Axios", icon: "logos:axios" },
  { name: "Material-UI", icon: "simple-icons:mui" },
  { name: "ECharts", icon: "simple-icons:apacheecharts" },
  { name: "Day.js", icon: "/icons/dayjs.png" },
  { name: "Netlify", icon: "logos:netlify" },
];

const TechStack = () => {
  return (
    <TechContainer>
      <TechTitle>기술 스택</TechTitle>
      <TechList>
        {techs.map((tech) => (
          <TechBadge key={tech.name}>
            {tech.icon.startsWith("/") ? (
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            ) : (
              <TechIcon icon={tech.icon} />
            )}
            <TechText>{tech.name}</TechText>
          </TechBadge>
        ))}
      </TechList>
    </TechContainer>
  );
};

export default TechStack;

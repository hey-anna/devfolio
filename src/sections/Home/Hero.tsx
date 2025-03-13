import { Icon } from "@iconify/react";
import styled from "styled-components";

const HeroContainer = styled.section`
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  text-align: center;
  margin-top: 8rem;
`;

const IconWrapper = styled.span`
  position: absolute;
  right: -2.9rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  color: #facc15;
  //   vertical-align: middle;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin-top: 0.5rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>
        안녕하세요!
        <IconWrapper>
          <StyledIcon icon="twemoji:waving-hand" className="text-yellow-400" />
        </IconWrapper>
      </Title>
      <Subtitle>프론트엔드 개발자입니다. 프로젝트와 코드를 소개합니다.</Subtitle>
    </HeroContainer>
  );
};

export default Hero;

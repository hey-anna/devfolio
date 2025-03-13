import styled from "styled-components";

const ContactContainer = styled.section`
  text-align: center;
  padding: 3rem 2rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>연락처 010.2593.2836</h2>
      <p>Email: jkisskb@naver.com</p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/hey-anna" target="_blank">
          hey-anna
        </a>
      </p>
    </ContactContainer>
  );
};

export default Contact;

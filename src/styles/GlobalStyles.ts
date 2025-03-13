import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
`;

export const lightTheme = {
  bg: "#ffffff",
  text: "#333",
};

export const darkTheme = {
  bg: "#1a1a1a",
  text: "#ffffff",
};

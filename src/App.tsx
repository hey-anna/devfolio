import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { useThemeStore } from "./store/useThemeStore";
import "./App.css";
import "./tailwind.css";

const App: React.FC = () => {
  const { isDarkMode } = useThemeStore(); // Zustand에서 다크모드 상태 가져오기
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;

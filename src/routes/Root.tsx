import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { LightTheme, DarkTheme } from "../css/theme";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color:${(props) => props.theme.bgColor}}
  i {
    user-select: none;
  }
  a {
  text-decoration: none;
}
`;
const ThemeToggle = styled.div<{ isDark: Boolean }>`
  position: fixed;
  bottom: 25px;
  left: 25px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.itemBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 99%;
  box-shadow: 3px 6px 8px rgba(20, 20, 20, 0.1);
  cursor: pointer;
`;
const Toggle = styled.div``;

function App() {
  const [isDark, setIsDark] = useState(false);
  const onThemeToggleClick = () => setIsDark((prev) => !prev);
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <ThemeToggle isDark={isDark} onClick={onThemeToggleClick}>
          <Toggle>
            {isDark ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </Toggle>
        </ThemeToggle>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

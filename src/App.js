import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import HomePage from "pages/Home";
import Header from "components/Header";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <HomePage />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

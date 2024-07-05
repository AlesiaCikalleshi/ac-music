import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import { MainTitle, SubText, SubTitle, SectionTitle, Button, Text } from "components/ui/typography";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Users,
  Volume,
} from "components/ui/Icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SubTitle>Hello</SubTitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <Button>Hello</Button>
      <br />
      <Play />
      <SkipLeft />
      <SkipRight />
      <Pause />
      <Volume />
      <Music />
      <ArrowLeft />
      <ArrowRight />
      <Heart />
      <Users />
      <Search />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { light, dark } from '../theme';
import { useTheme } from './ThemeSwitch/useTheme';
import { ThemeSwitch } from "./ThemeSwitch";
import Form from './Form';
import Footer from './Footer';
import Header from './Header';
import ParticlesBackground from './Particles';
import Container from './Container';
import { Section, SectionBackground } from './Section';


function App() {

  const {
    theme,
    toggleTheme,
    isDarkTheme
  } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <ParticlesBackground />
      <Container>
        <Section>
          <Header>
            <ThemeSwitch
              onClick={toggleTheme}
              status={theme === 'light' ? "on" : "off"}
              active={isDarkTheme()}
            />
          </Header>
        </Section>
        <SectionBackground >
          <Form />
          <Footer name="Patryk Krawczyk" year="2021" />
        </SectionBackground>
      </Container>
    </ThemeProvider>
  );
}

export default App;
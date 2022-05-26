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
import Section from './Section';
// import Board from './Board';
import { particlesConfigLight, particlesConfigDark } from "./Particles/particles-config";


function App() {

  const {
    theme,
    toggleTheme,
    isDarkTheme
  } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <ParticlesBackground options={theme === 'light' ? particlesConfigLight : particlesConfigDark} />
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
        <Form />
        {/* <Section backgroundSection={true}>
          <Board />
        </Section> */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
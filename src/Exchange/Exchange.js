import { light, dark } from '../theme';
import { useTheme } from '../common/Header/ThemeSwitch/useTheme';
import { ThemeSwitch } from "../common/Header/ThemeSwitch";
import Form from '../features/calculator/Form';
import Footer from '../common/Footer';
import Header from '../common/Footer';
import ParticlesBackground from '../common/Particles';
import Container from '../common/Container';
import Section from '../common/Section';
// import Board from './Board';
import { particlesConfigLight, particlesConfigDark } from "../common/Particles/particles-config";


const Exchange = () => {

  const {
    theme,
    toggleTheme,
    isDarkTheme
  } = useTheme();

  return (
    <>
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
    </>
  );
}

export default Exchange;
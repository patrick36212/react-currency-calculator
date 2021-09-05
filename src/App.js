import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import "./index.css";
import Section from './Section';

function App() {
  return (
    <Container>
        <Section title="Exchange calculator" body={<Form />} />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;

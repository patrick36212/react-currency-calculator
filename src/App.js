import Button from './Button';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import "./index.css";
import Section from './Section';

function App() {
  return (
    <Container>
      <Header title="React currency calculator" />
        <Section body={<Form />} extraContent={<Button />} />
        <Section title="Przeliczona Kwota" />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;

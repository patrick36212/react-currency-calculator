import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import Section from './Section';
import { currencies } from "./currencies";
import { useState } from 'react';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const value = currencies.find(({ short }) => short === currency).value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / value,
      currency,
    });
  };

  return (
    <Container>
      <Section
        title="Currency calculator"
        body={
        <Form
          calculateResult={calculateResult}
          result={result}
        />}
      />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;

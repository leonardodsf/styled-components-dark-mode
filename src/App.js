import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { TemaClaro, TemaEscuro } from './Components/UI/temas';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from './Components/GlobalStyle';
import { ButtonTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [tema, setTema] = useState(true);

  const temaDefault = localStorage.getItem('dark-mode');

  const toggleTheme = () => {
    setTema((tema) => !tema);
    localStorage.setItem('dark-mode', tema);
  }

  return (
    <ThemeProvider theme={JSON.parse(temaDefault) ? TemaEscuro : TemaClaro}>
      <GlobalStyle />
      <ButtonTheme onClick={toggleTheme}>
        <SwitchTheme tema={JSON.parse(temaDefault)}/>
      </ButtonTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;

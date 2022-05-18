import { Fundo } from "./components/Fundo";
import { ContainerFundo } from "./components/Fundo/style";
import { Header } from "./components/Header";
import { Listas } from "./components/Listas";
import { Pesquisa } from "./components/Pesquisa";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    
      <GlobalStyle />
      <ContainerFundo>
      <Header />
      <Pesquisa />
      <Listas />
      </ContainerFundo>
      
    </>
  );
}


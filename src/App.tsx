import { Header } from "./components/Header";
import { Listas } from "./components/Listas";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Listas />
    </>
  );
}


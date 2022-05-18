import { Container, Content } from "./styles"

export function Pesquisa() {
  return (
    <Container>
      <p>Digite uma palavra chave</p>
        <form>
          <input type="search" name='search' id='search' placeholder='Nome da música' maxLength={100}/>
          <button type='submit' title='' >Procurar</button>
        </form>
        <section>
          <button type='submit' title='' >Adiconar Álbum</button>
          <button type='submit' title='' >Remover Álbum</button>
      </section>
    </Container>
  ) 
}
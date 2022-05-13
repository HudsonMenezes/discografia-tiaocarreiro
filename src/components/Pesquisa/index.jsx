import { Container, Content } from "./styles"

export function Pesquisa() {
  return (
    <Container>
      <p>Digite uma palavra chave</p>
        <form>
          <input type="search" name='search' id='search' placeholder='Nome da música' maxLength={100}/>
          <button type='submit' title='Se' >Procurar</button>
        </form>
    </Container>
  )
}
import { Container } from "./styles";
import { api } from "../../api";



export function Listas(){

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Álbum:</th>
            <th>Nome do Álbum, Ano do Álbum</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nº</td>
            <td>Faixa</td>
            <td>Duração</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Minas Gerais</td>
            <td>3:47</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Álbum:</th>
            <th>Nome do Álbum, Ano do Álbum</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nº</td>
            <td>Faixa</td>
            <td>Duração</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Minas Gerais</td>
            <td>3:47</td>
          </tr>
        </tbody>
      </table>
      
    </Container>
  )
}
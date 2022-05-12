import { useEffect } from "react";
import { Container } from "./styles";

export function Listas(){
  useEffect(() => {
    fetch('https://tiao.supliu.com.br/api/album')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])
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
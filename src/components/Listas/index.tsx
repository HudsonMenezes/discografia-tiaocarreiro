import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface album {
  id: number;
  name: string;
  tracks: object;
  number: number;
  title: string;
  year: number;
}

interface tracks {
  id: number;
  number: number;
  title: string;
  duration: number;
}


export function Listas(){
  const [albumList, setAlbumList] = useState<album[]>([]);
  const [tracks, setTracks] = useState<tracks[]>([]);

  useEffect(() => {
    api.get('album')
    .then(response => setAlbumList(response.data.data) //setAlbum(response.data.data))
  )}, []);

      
    {albumList.map(item => {
      return(
      <Container>
      <table key={item.id}>
        <thead>
          <tr>
            <th>Álbum:</th>
            <th>{item.name}, {item.year}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Nº</td>
          <td>Faixa</td>
          <td>Duração</td>
        </tr>
        </tbody>
          <tbody>
          {tracks.map(element => {
                  const time = element.duration
                  var minutes = Math.floor(time / 60);
                  var seconds = time - minutes * 60;
                  
                  return(
                    <tr key={element.id}>
                      <td>{element.number}</td>
                      <td>{element.title}</td>
                      <td>{minutes}:{seconds?seconds:'00'}</td>
                    </tr>
                  )
                })
              }
          </tbody>
      </table>
    </Container>
  
)})}}

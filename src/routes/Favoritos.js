import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoritos, getFavoritos } from '../services/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height:  auto;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`;
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top:35px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  margin-left: 20px;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  background-image: linear-gradient(90deg, #0A67F7 35%, #450AF7 165%);
  border-radius: 20px;
  width: 75px;
  p{
    width:200px;
    color: #FFF;
  }
  img{
    width: 100px;
    border-radius: 4px;
  }
  &:hover{
    border: 1px solid white;
  }
`;
const ResultadoContainer = styled.div`
    display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
  
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }
  async function deletarFavoritos(id){
    await deleteFavoritos(id);
    await fetchFavoritos()
    // alert(`Livro de id: ${id} removido dos favoritos!`)
  }
  useEffect(() => {
    fetchFavoritos()
  }, []);
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos</Titulo>
      <ResultadoContainer>
        {favoritos.map(favorito => (
          <Resultado>
            <img src={favorito.imagem} alt=''/>
            <p>{favorito.nome}</p>
            <button onClick={() => deletarFavoritos(favorito.id)}> X </button>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;

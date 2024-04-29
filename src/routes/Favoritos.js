import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoritos, getFavoritos } from '../services/favoritos';
import livroImg from  '../img/livro.png'

const AppContainer = styled.div`
    width: 100vw;
    height:  100vh;
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
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
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
  grid-template-columns: 250px 250px 250px;
  justify-content: center;
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
    alert(`Livro de id: ${id} removido dos favoritos!`)
  }
  useEffect(() => {
    fetchFavoritos()
  }, []);
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos</Titulo>
      <ResultadoContainer>
        {favoritos.map(favorito => (
          <Resultado onClick={() => deletarFavoritos(favorito.id)}>
            <img src={livroImg}/>
            <p>{favorito.nome}</p>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;

import styled from "styled-components";
import { todosLivros } from "../components/botoesCat/livros.js";
import { postFavoritos } from "../../src/services/favoritos";
import { BtnFavorito } from "../components/pesquisa/index.js";
import BotoesCategoria from './../components/botoesCat/index.js';
import CarrinhoCompras from "../components/carrinho/index.js";


const Container = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    display:flex;
    flex-direction: column;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
    padding-bottom: 10%;
`;

// const TodosLivros = styled.div``;
const Resultado = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  margin-left: 20px;
  text-align: center;
  padding: 0 100px;
  background-image: linear-gradient(90deg, #0A67F7 35%, #450AF7 165%);
  border-radius: 20px;
  display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: center;
  p{
    width:200px;
    color: #FFF;
    display: flex;
  }
  img{
    width: 100px;
    border-radius: 4px;
  }
`;
const ImgNome =styled.div`
  display: flex;
  padding-top:5px;
  padding-bottom:5px;
  p{
  margin-top: 40px;
    font-size: 16px;
  }
`;

const BotoesAcoes =styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;
const Descricao = styled.div``;
function Categoria(){
  async function insertFavorito(id){
    await postFavoritos(id);
    // alert(`Livro de id:${id} adicionado aos favoritos!`);
}
    return(
    <Container>
        <BotoesCategoria/>
        {todosLivros.map(livro =>
          <Resultado>
            <ImgNome>
              <img src={livro.imagem} alt=""/>
              <p>{livro.nome}</p>
            </ImgNome>
            <Descricao>
              <p>Preço: R${livro.preco.toFixed(2)}</p>
              <p>Autor: {livro.autor}</p>
              <p>Categoria: {livro.categoria}</p>
            </Descricao>
            <BotoesAcoes>
              <BtnFavorito onClick={() => insertFavorito(livro.id)}>Favoritos</BtnFavorito>
              <CarrinhoCompras/>
            </BotoesAcoes>
          </Resultado>
        )}
    </Container>
    )
}
export default Categoria;
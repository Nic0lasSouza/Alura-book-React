import React, { useState } from 'react';
import { todosLivros } from "../../components/botoesCat/livros";
import { postFavoritos } from '../../services/favoritos.js';
import styled from 'styled-components';
import { BtnFavorito } from '../pesquisa';
import CarrinhoCompras from './../carrinho/index';


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
const BtnContainer = styled.div``;
const BotoesAcoes =styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;
const Botoes = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    justify-content: center;
    align-items: center;

`;
const Botao = styled.button`
    padding: 10px 10px;
    background-color: #4CAF50;
    color: #FFF;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: 5px;


    &:hover {
        background-color: #45a049;
    }
`;
export const Descricao = styled.div``;

const LivrosConteiner = styled.div``;

const Conteiner = styled.div``;

function FiltrarLivrosCategoria() {
    const [itensFiltrados, setItensFiltrados] = useState(todosLivros);
    const filtrarItens = categoria => {
      const itensFiltrados = todosLivros.filter(livro => livro.categoria === categoria);
      setItensFiltrados(itensFiltrados);
    };
    async function insertFavorito(id){
        await postFavoritos(id);
        // alert(`Livro de id:${id} adicionado aos favoritos!`);
    }
    return (
        <Conteiner>
            <BtnContainer>
                <Botoes>
                    <Botao onClick={() => filtrarItens('front-end')}>LIVROS DE FRONT-END</Botao>
                    <Botao onClick={() => filtrarItens('dados')}>LIVROS DE DADOS</Botao>
                    <Botao onClick={() => filtrarItens('back-end')}>LIVROS DE BACK-END</Botao>
                    <Botao onClick={() => setItensFiltrados(todosLivros)}>LIMPAR FILTRO</Botao>
                </Botoes>
            </BtnContainer>
        <LivrosConteiner>
            {itensFiltrados.map(livro => (
            <Resultado>
                <ImgNome>
                    <img src={livro.imagem} alt=''/>
                    <p>{livro.nome}</p>
                </ImgNome>
                <Descricao>
                    <p>Preço: R${livro.preco.toFixed(2)}</p>
                    <p>Autor: {livro.autor}</p>
                    <p>Categoria: {livro.categoria}</p>
                </Descricao>
                <BotoesAcoes>
                <BtnFavorito onClick={() => insertFavorito(livro.id)}>Favoritos</BtnFavorito>
                <CarrinhoCompras onClick={() => alert("botao clicado")}/>
                </BotoesAcoes>
            </Resultado>
            ))}
        </LivrosConteiner>
        </Conteiner>
)}

  export default FiltrarLivrosCategoria;
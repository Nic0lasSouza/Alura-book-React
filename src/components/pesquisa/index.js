import Input from "../input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import { postFavoritos } from "../../services/favoritos";


const PesquisaContainer= styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
    padding-bottom: 10%;
`;
const Titulo  = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;
const  ResultadoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    background-image: linear-gradient(90deg, #0A67F7 35%, #450AF7 165%);
    border-radius: 20px;
    width: 20em;
    margin: 0 auto;
    position: relative;
    z-index: 2;


    p{
        width:100px
        justify-content: left;
        align-items: center;
        text-align:center;
    }
    img{
        width: 100px;
        border-radius: 30px;
    }

`;
export const ResultPesquisaDiv = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: center;
`;
export const BtnFavorito =styled.button`
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
    border-radius:10px;
    padding-left:16px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
    color:#ffffff;
    background-color:#16ab54;
    outline:none;
    border:none;
    cursor:pointer;
    display:inline-block;
    text-decoration: none;
    transition: .4s;

    &:hover{
        color:#ffffff;
        background-color:#11f79f;
    }
`;
function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setlivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros(){
        const livrosApi = await getLivros();
        setlivros(livrosApi);
    }
    async function insertFavorito(id){
        await postFavoritos(id);
        // alert(`Livro de id:${id} adicionado aos favoritos!`);
    }
    return(
        <PesquisaContainer>
            <Titulo>Ja sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <ResultPesquisaDiv>
                {livrosPesquisados.map(livro => (
                    <ResultadoContainer >
                        <img src={livro.imagem} alt="Imagem do Livro"/>
                        <p>{livro.nome}</p>
                        <BtnFavorito onClick={() => insertFavorito(livro.id)}>Favoritos</BtnFavorito>
                    </ResultadoContainer>
                ))}
            </ResultPesquisaDiv>
        </PesquisaContainer>
    );
};
export default  Pesquisa;
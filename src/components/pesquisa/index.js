import Input from "../input";
import styled from "styled-components";
import LivroImg from "../../img/livro.png";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import { postFavoritos } from "../../services/favoritos";


const PesquisaContainer= styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 500px;
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

    p{
        width:100px
        justify-content: left;
        align-items: center;
        text-align:center;
    }
    img{
        width: 120px;
        border-radius: 40px;
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
        alert(`Livro de id:${id} adicionado aos favoritos!`);
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
            {livrosPesquisados.map(livro => (
                <ResultadoContainer onClick={() => insertFavorito(livro.id)}>
                    <img src={livro.src}></img>
                    <p>{livro.nome}</p>
                </ResultadoContainer>
            ))}
        </PesquisaContainer>
    );
};
export default  Pesquisa;
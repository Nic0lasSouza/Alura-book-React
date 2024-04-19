import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer= styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
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




    p{
        width:200px
    }
    img{
        width: 100px
    }

    &:hover{
       border: 1px solid white;
       transform: scale(1.1);
       transition: transform 0.5s;
`;
function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
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
                <ResultadoContainer>
                    <img src={livro.src}></img>
                    <p>{livro.nome}</p>
                </ResultadoContainer>
            ))}
        </PesquisaContainer>
    );
};
export default  Pesquisa;
import styled from "styled-components";
import CardRecomenda from "../cardRecomend";
import ImgLivro from "../../img/livro2.png"
import { Titulo } from "../titulo";
import { livros } from "./UltLancaLivr";

const  Container = styled.section`
    background: #808080;
    padding-bottom = 20px;
    display: flex;
    flex-direction: column;

`;


const NewLivrosContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width:100%;
    justify-content: center;
    cursor: pointer;
    background: #808080;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 10px;

    img{
        border-radius:10px;
        width:150px;
    }
    img:hover{
        transform: scale(1.1);
        transition: transform 0.5s;
    }
`;

const  LivrosM = styled.div`
`;
function UltimosLancamentos() {
    return (
        <Container>
            <Titulo
            cor='#EB9B00' tamanhoFonte='36px' alinhamento='center'>
            Últimos Lançamentos</Titulo>
            <NewLivrosContainer>
                {livros.map( livro =>
                <LivrosM>
                    <img src={livro.src} alt=""/>
                    <p>{livro.nome}</p>
                </LivrosM>
                )}
            </NewLivrosContainer>
            <CardRecomenda
                titulo={"Talvez se interesse por..."}
                subtitulo={"Angular 11"}
                descricao={"Construindo uma aplicação com a plataforma Google"}
                img={ImgLivro}
            />
        </Container>
    )
}
export default  UltimosLancamentos;
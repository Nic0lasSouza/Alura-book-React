import styled from "styled-components";
const Container = styled.div`
    margin-top: -85px;
`;
const Botoes = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    justify-content: center;
    align-items: center;

`;
const Botao = styled.button`
    padding: 10px 20px;
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
function botoesCategoria(){
    return(
        <Container>
            <Botoes>
                <Botao>Livros de Front-End</Botao>
                <Botao>Livros de Back-End</Botao>
                <Botao>Livros de Dados</Botao>
                <Botao>Ordenar por Preço</Botao>
            </Botoes>
        </Container>
    )
};
export default botoesCategoria;
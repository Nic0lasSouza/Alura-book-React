import styled from 'styled-components';
const textOptions = ['Categorias', ' Favoritos', 'Minha estante'];

const OpcoesContainer = styled.ul`
    display: flex;
`;
 const  OptionButton = styled.li`
    min-width: 120px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    display: flex;
`;

function opcoesheader(){
    return(
        <OpcoesContainer>
            {textOptions.map( (texto) =>(
            <OptionButton><p>{texto}</p></OptionButton>
        ))}
      </OpcoesContainer>
    )
}

 export default opcoesheader;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OpcoesContainer = styled.ul`
display: flex;
`;
const OptionButton = styled.li`
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

const textOptions = ['Categorias', 'Favoritos', 'Estante'];

function opcoesheader() {
    return (
        <OpcoesContainer>
            {textOptions.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}><OptionButton><p>{texto}</p></OptionButton></Link>
            ))}
        </OpcoesContainer>
    )
}

export default opcoesheader;
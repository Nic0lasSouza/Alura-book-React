import Header from '../components/header/index.js';
import styled from 'styled-components';
import Pesquisa from '../components/pesquisa/index.js';


const AppContainer = styled.div`
    width: 100vw;
    height:  100vh;
    
`;

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Favoritos;

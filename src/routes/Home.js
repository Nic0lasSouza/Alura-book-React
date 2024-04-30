import styled from 'styled-components';
import Pesquisa from '../components/pesquisa/index.js';
import UltimosLancamentos from '../components/Ultimoslocamentos/index.js';


const AppContainer = styled.div`
    width: 100vw;
    height:  100vh;
    
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;

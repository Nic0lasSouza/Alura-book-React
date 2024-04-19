import Perfil from '../../img/perfil.svg';
import Sacola from '../../img/sacola.svg';
import styled from 'styled-components';
const icones = [Sacola,Perfil];

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;

`;
const Icones = styled.ul`
  display: flex;
  align-items: center;

`;


function icon(){
    return(
        <Icones>
        {icones.map( (icone ) => (
          <Icone><img src={icone}></img></Icone>
        ))}
        </Icones>
    );
}

export default icon;
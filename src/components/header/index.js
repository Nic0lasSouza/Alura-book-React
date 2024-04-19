import Logo  from '../logo/index.js';
import NavBar from '../navbar/index.js';
import Ico from '../botoes/index.js';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background: #fff;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo />
            <NavBar />
            <Ico />
        </HeaderContainer>
    );
};

export default  Header;
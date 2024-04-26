import Logo  from '../logo/index.js';
import NavBar from '../navbar/index.js';
import Ico from '../botoes/index.js';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background: #fff;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <NavBar />
            <Ico />
        </HeaderContainer>
    );
};

export default  Header;
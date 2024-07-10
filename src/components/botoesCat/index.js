import styled from "styled-components";
import FiltrarLivrosCategoria from "./filtrar";
const Container = styled.div`
    margin-top: -85px;
`;
// const Resultado = styled.div``;
function BotoesCategoria(){
    return(
        <Container>
            <FiltrarLivrosCategoria/>
        </Container>
    )
};
export default BotoesCategoria;


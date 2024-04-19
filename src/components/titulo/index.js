import styled from "styled-components";

export const Titulo = styled.h2`
    height: 56px;
    font-size: ${props=> props.tamanhoFonte || '18px'};
    background-color: #FFFF;
    color: ${props => props.cor || '#0000'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;

`;
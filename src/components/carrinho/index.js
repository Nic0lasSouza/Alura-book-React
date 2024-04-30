import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BtnCarrinho = styled.button`
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
    border-radius:10px;
    padding-left:25px;
    padding-right:25px;
    padding-top:5px;
    padding-bottom:5px;
    color:#ffffff;
    background-color:#16ab54;
    outline:none;
    border:none;
    cursor:pointer;
    display:inline-block;
    text-decoration: none;
    transition: .4s;

    &:hover{
        color:#ffffff;
        background-color:#11f79f;
    }

`;
function CarrinhoCompras(){
    return(
        <BtnCarrinho onClick={() => alert("botao clicado")}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </BtnCarrinho>
    )
}
export default CarrinhoCompras;
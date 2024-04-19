import styled from "styled-components";
import { Titulo } from "../titulo";;

const Card = styled.div`
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 26px 20px;
    justify-content: space-around;
    width:100%;
`;

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    margin: 15px 0;
`;

const Descricao = styled.p`
    max-width:300px;
`;

const ImgLivro = styled.img`
    width: 150px;
    border-radius: 50px;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s;
    }
`;

const Botao =styled.button`
    background-color: #EB9B00;
    color:#FFF;
    font-size: 16px;
    padding:10px 0px;
    border: 3px solid #000;
    font-weight: 900;
    display:block;
    text-align:center;
    width: 150px;
    border-radius: 50px;
    z-index: 0;

    &:hover{
        cursor:pointer;
        transform: scale(1.1);
        transition: transform 0.5s;
    }
`;
function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <Card>
            <div>
                <Titulo tamanhoFonte="20px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba Mais</Botao>
            </div>
        </Card>
    );
}
export default CardRecomenda;
import styled from "styled-components"
import imgesc from "assets/img/imagem_dino_escurecida.svg"

export const Mainfour = styled.main`
    width: 100%;
    height: 650px;
    border: 1px solid #000;
    background-position: center;
    background-image: url(${imgesc});
    width: 1022px;
    main{
        p{
        color:white;
        margin: 1rem;
        text-align: justify;
        font-size: 20px;
        }
    }
`
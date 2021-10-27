import styled from "styled-components";
import imgesc from "assets/img/imagem_dino_escurecida.svg"

export const Formulario = styled.form`
    
    background-position: center;
    background-image: url(${imgesc});
    display: flex;
    height: auto;
    flex-direction: column;
    main{
        font-size: 20px;
        color: white;
        text-decoration: none;
        div{
            
            display: flex;
            justify-content: center;
            align-items: center;
            height: 650px;
            width: 1022px;
            section{
                border: 10px solid white;
                padding: 30px;
                width:30%;

            label{
                color: white;
                font-size: 25px;
            }
            input{
                width: 100%;
            }
            button{
                
            }   
            a{
                font-size: 20px;
                color: white;
                text-decoration: none;
            
            }

            }
        }
    }
    
`
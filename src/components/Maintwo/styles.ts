import styled from "styled-components"
import imgprinc from "assets/img/Imagem_principal_dinossauro.svg"
export const Maintwo = styled.main`
    width: 100%;
    height: 600px;
    border: 1px solid #000;
    background-position: center;
    background-image: url(${imgprinc});
    width: 1022px;
    
    nav{
        background-color: #B7B295;
        text-align: right;
        color: black;
        margin-left: 940px;
        caption{
            color: white;
            background-color: black;
            width: 100%; 
        }
        table{
            tbody{
                tr{
                    td{
                        a{
                            text-decoration: none;
                            color: black
                        }
                      }
                }
            }
        }
    }

`

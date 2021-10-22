import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  
  body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
  h1{
    color: #ffffff;
  }

  aside{
    background-color: #B7B295;
    text-align: right;
    color: #000000;
    margin-left: 1250px;
}
`

export const colors = {
    black:"#000000",
    white: "#ffffff",
    fundo: "#B7B295"
}
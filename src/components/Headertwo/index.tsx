import * as S from "./styles"
import logo from "assets/img/logo.svg"
import { Link } from "react-router-dom"
const Headertwo = () => {
    return (
        <S.Headertwo>
        <picture>
            <img src={logo} alt="Logo do site" />
        </picture>  
        <h1>Aprendendo sobre dinossauros</h1>    
        <Link to="/pagum">Home</Link>
        </S.Headertwo>
    )
}

export default Headertwo
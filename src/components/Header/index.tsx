import * as S from "./styles"
import logo from "assets/img/logo.svg"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <S.Header>
        <picture>
            <img src={logo} alt="Logo do site" />
        </picture>  
        <h1>Aprendendo sobre dinossauros</h1>    
        <Link to="/pagdois">Menu</Link>
        </S.Header>
    )
}

export default Header
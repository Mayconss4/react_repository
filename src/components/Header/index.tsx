import * as S from "./styles"
import logo from "assets/img/logo.svg"
const Header = () => {
    return (
        <S.Header>
        <picture>
            <img src={logo} alt="Logo do site" />
        </picture>  
        <h1>Aprendendo sobre dinossauros</h1>    
        <a href = "pag_2.html" id="menu1"> Menu</a>
        </S.Header>
    )
}

export default Header
import * as S from "./styles"
import logo from "assets/img/logo.svg"
import { Link } from "react-router-dom"

const Headerfour = () => {
    return (
        <S.Headerfour>
            <picture>
                <img src={logo} alt="Logo do site" />
            </picture>  
            <h1>Espécimes</h1>    
            <ul id="menu3"> 
                <li>
                    <Link to="/pagum">Home</Link>
                </li>
                <li>    
                    <Link to="/pagdois">Menu</Link>
                </li>
            </ul>
        </S.Headerfour>
    )
}

export default Headerfour
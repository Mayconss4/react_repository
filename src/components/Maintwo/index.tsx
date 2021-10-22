import * as S from "./styles"
import imgprinc from "assets/img/Imagem_principal_dinossauro.svg"
import { Link } from "react-router-dom"

const Maintwo = () => {
    return (
        <S.Maintwo>
           
            <nav>
            <table>
                <caption>
                    Menu
                </caption>
                    <tbody>
                        <tr>
                            <td> 
                            <Link to="/pagtres">História</Link>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <Link to="/pagquatro">Espécimes</Link>
                                
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <Link to="">Imagens</Link>
                                
                            </td>
                        </tr>
                        <tr>
                            <td> 
                            <Link to="">Fósseis</Link>
                                
                            </td>
                        </tr>

                    </tbody>
            </table>  
            </nav>
        </S.Maintwo>
    )
}

export default Maintwo
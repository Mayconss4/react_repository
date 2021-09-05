import * as S from "./styles"
import imgprinc from "assets/img/Imagem_principal_dinossauro.svg"
const Body = () => {
    return (
        <S.Body>
        <picture>
            <img src={imgprinc} alt = "Imagem_principal_dinossauro" />
        </picture>
        </S.Body>
    )
}

export default Body
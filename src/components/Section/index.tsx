import * as S from "./styles"
import imgprinc from "assets/img/Imagem_principal_dinossauro.svg"
const Section = () => {
    return (
        <S.Section>
        <picture>
            <img src={imgprinc} alt = "Imagem_principal_dinossauro" />
        </picture>
        </S.Section>
    )
}

export default Section
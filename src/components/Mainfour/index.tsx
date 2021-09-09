import * as S from "./styles"
import imgprinc from "assets/img/Imagem_principal_dinossauro.svg"

const Mainfour = () => {
    return (
        <S.Mainfour>
            <picture>
                <img src={imgprinc} alt = "Imagem_principal_dinossauro" />
            </picture>
            <main>
                <p id="especimes">
                    1 - Tireóforos: 
                    Eram grandes e caminhavam em quatro patas
                Eram herbívoros (se alimentavam de vegetais).
                Possuíam corpo coberto por placas ósseas, destinadas à proteção, pois funcionavam como uma espécie de escudo (couraça).
                Exemplos: Kentrosaurus, Panoplossauro e Allossauro.
                2 - Terópodos
                - Se alimentavam de carne de outros animais, portanto eram carnívoros.
                - As aves descendem deste grupo de dinossauros.
                - Eram bípedes (caminham utilizando as pernas inferiores).
                - Apresentavam grande variedade com relação ao tamanho.
                Exemplos: Spinosaurus, Ceratossauro, Tiranossauro, Megalossauro e Velociraptor, Trodonte.
                3 - Sauropodomorfos
                - Apresentavam como uma das principais características a presença de pescoço longo.
                - Eram dinossauros herbívoros.
                - Foram os maiores e mais pesados dinossauros que viveram na Terra.
                - Surgiram como bípedes, porém com o desenvolvimento corporal (tamanho e peso) tornaram-se quadrúpedes.
                - Possuíam dentes fracos em função da dieta baseada em vegetais.
                Exemplos: Branquiossauro, Thecodontosaurus e Riojassauro.  
                4 - Ornitópodes
                - Eram bípedes, se locomovendo usando as patas traseiras. Usavam as dianteiras para pegar os alimentos.
                - Se alimentavam de vegetais (eram herbívoros).
                - Existiram em grande quantidade, habitando diversas regiões do mundo.
                - Possuíam bico chifrudo e pés com três dedos.
                - Seu sistema mastigatório, embora fossem herbívoros, era bem desenvolvido.
                Exemplos: Iguaonodon, Bactrosaurus, Hadrosaurus, Ouranosaurus e Camptosaurus.
                5 - Marginocéfalos
                - Eram dinossauros herbívoros.
                - Possuíam uma borda de osso na parte posterior do crânio.
                - Algumas espécies eram quadrupedes e outras bípedes.
                - Possuíam crânio grosso e resistente.
                Exemplos: Einiosaurus, Triceratops e Paquicefalossauro.
                </p>
            </main>
        </S.Mainfour>
    )
}

export default Mainfour
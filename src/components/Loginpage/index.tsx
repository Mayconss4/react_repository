import * as S from "./styles"
import { Link } from "react-router-dom"

const Loginpage = () =>{
    return (
        
        <S.Formulario>
            <div>
                <section>
                    <label htmlFor="">Email</label><br/><br/>
                    <input type="email" name="" id="" /><br/><br/>
                    <label htmlFor="">Senha</label><br/><br/>
                    <input type="password" name="" id="" /><br/><br/>
                    <button>Acessar</button><br/><br/>
                    <Link to="">Esqueci minha senha!</Link>
                </section>
            </div>
        </S.Formulario>
        
    )
}
export default Loginpage;
import * as S from "./styles"
import { Link } from "react-router-dom"

const Loginpage = () =>{
    return (
        
        <S.Formulario>
            <main>
                <Link to="/pagum">Ir para o site sem login.</Link>
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
            </main>    
        </S.Formulario>
        
    )
}
export default Loginpage;
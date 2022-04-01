import { useState } from 'react';
import Buttons from '../Buttons/Buttons';

import "./Condicional.css";

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }    
    
    function limparEmail(e) {
        setUserEmail('');
    }


    return (
        <div className="container_condicionais">
            <h3>Condicional</h3>
            <form>
                <div className="input">
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div onClick={enviarEmail}>
                    <Buttons buttonText="Enviar email" buttonColor="primary" />
                </div>
            </form>
            {
                userEmail && (
                    <div className="mostra_email">
                        <h5>email: {userEmail}</h5>
                        <div onClick={limparEmail}>
                            <Buttons buttonText="Limpar" buttonColor="cancel" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Condicional;
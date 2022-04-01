import React, { useState } from 'react';
import "./Form.css";

function Form() {

    const [usuario, setUsuario] = useState('');

    function cadastrarUsuario(event) {
        event.preventDefault();
        console.log("Cadastrando usuário: ", usuario.target.value);
        console.log("Usuário: ", usuario.target);
        // console.log("Usuário: ", usuario.name);

        const newName = document.getElementById("renewname");
        newName.innerHTML = usuario.target.value;

    }

    /* Segundo formulário */

    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [withValue, setWithValue] = useState('value pre-definido');

    function Formulario(e) {
        e.preventDefault();

        const handleNameFor = document.getElementById("handlename");
        handleNameFor.innerHTML = nome;

        const handlePassFor = document.getElementById("handlepassword");
        handlePassFor.innerHTML = password;

        const handlewithvalue = document.getElementById("handlewithvalue");
        handlewithvalue.innerHTML = withValue;
    }



    return (
        <>
            <div className="container">
                <form className="form_evento" onSubmit={cadastrarUsuario}>
                    <div className="input_container">
                        <input
                            type="text"
                            placeholder="Nome"
                            onChange={setUsuario}
                        />
                    </div>
                    <input type="submit" value="Cadastrar" className="input_submit" />
                    <div className="show_name">
                        <h2 id='renewname'>Digite seu nome</h2>
                    </div>
                </form>
            </div>


            <div className="container">
                <form className="form_evento" onSubmit={Formulario}>
                    <div className="input_container">
                        <input
                            type="text"
                            id="name"
                            name="nome"
                            placeholder="Username"
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="input_container">
                        <input
                            type="password"
                            placeholder="*****"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>                 
                    
                    <div className="input_container">
                        <input
                            type="text"
                            name="withvalue"
                            id="withvalue"
                            value={withValue}
                            onChange={(e) => setWithValue(e.target.value)}
                        />
                    </div>


                    <input type="submit" value="Cadastrar" className="input_submit" />

                    <div className="show_name">
                        <h2 id='handlename'>Seu Usuario</h2>
                        <h2 id='handlepassword'>Sua senha</h2>
                        <h2 id='handlewithvalue'>Seu valor</h2>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default Form;
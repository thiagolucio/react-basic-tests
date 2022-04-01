import "./Saudacao.css";

function Saudacao({ nome }) {

    function gerarSaudacao() {
        return `Olá ${nome}`;
    }
    return (
        <>
            {nome &&
                <h2>{gerarSaudacao(nome)}</h2>
            }
        </>
    )
}

export default Saudacao;
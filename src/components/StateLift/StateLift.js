import "./StateLift.css";

function StateLift({ setNome }) {

    return (
        <>
            <label>Qual seu nome?</label>
            <input 
                type="text" 
                placeholder="Qual seu nome?" 
                onChange={(e) => setNome(e.target.value)}/>
        </>
    )
}

export default StateLift;
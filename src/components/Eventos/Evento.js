import Buttons from "../Buttons/Buttons";
import "./Evento.css";

function Evento({ info }) {

    function myEvent() {
        console.log(`Este é um evento do componente evento ${info} `);
    }

    return (
        <>
        <h3>Eventos</h3>
        <div className="capa_button" onClick={myEvent}>
            <Buttons buttonColor="info" buttonText="Acionar Evento" />
        </div>
        </>
    )
}

export default Evento;
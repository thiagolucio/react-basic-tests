import "./Buttons.css";

function Buttons(props) {

    return (
        <button className={`button ${props.color}`}>
            {props.buttonText}
        </button>
    )
}

export default Buttons;
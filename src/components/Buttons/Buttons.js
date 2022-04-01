import "./Buttons.css";

function Buttons({ buttonColor, buttonText }) {
 
    return (
        // <button className={`button ${buttonColor}`}>
        <button className={buttonColor}>
            {buttonText}
        </button>
    )
}

export default Buttons;
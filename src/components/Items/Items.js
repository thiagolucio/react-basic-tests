import PropTypes from "prop-types";
import "./Items.css";

function Item({ descricao, numero }) {

    return <li>{descricao} - {numero}</li>;       
    
}

Item.propTypes = {
    descricao: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}

// setando um valor default
Item.defaultProps = {
    descricao: 'N/A',
    numero: 5,
}

export default Item;
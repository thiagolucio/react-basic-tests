import Item from "../Items/Items";
import "./Lists.css";

function Lists() {
    return (
        <div className="body_list">
            <h4>Lista</h4>
            <ul>
                <Item descricao="Item" numero={1} />
                <Item descricao="Item" numero={2} />
                <Item descricao="Item" numero={3} />
                <Item descricao="Item" numero={4} />
            </ul>
        </div>
    );
}

export default Lists;
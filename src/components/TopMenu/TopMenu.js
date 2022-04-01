import { Link } from 'react-router-dom';
import Buttons from "../Buttons/Buttons";
import Images from "../Images/Images";
import Item from "../Items/Items";
import Badge from "../Badges/Badge";

import "./TopMenu.css";


function TopMenu() {

    function meuEvento({ numero }) {
        console.log(`Evento disparado:  ${ numero }`);
    }

    return (
        <div className="top_menu_container container_fluid separated">
            <div className="top_menu_logo">
                <Badge number="7" />
                <Images
                    url="https://via.placeholder.com/50"
                    classImage="logo_top"
                    altImage="Logo"
                    titleImage="Logo"
                />
            </div>
            <ul className="container flex_horizontal gap8">
                <li>
                    <Buttons buttonColor="whitelink" buttonText={<Item descricao="Link" numero={1} />} />
                </li>     
                <li>
                    <Buttons buttonColor="whitelink" buttonText={<Item descricao="Item" numero={3} />} />
                </li>     
                <li onClick={meuEvento}>
                    <Buttons buttonColor="whitelink" buttonText="Btn Evento" />
                </li>
            </ul>
        </div>
    )
}

export default TopMenu;
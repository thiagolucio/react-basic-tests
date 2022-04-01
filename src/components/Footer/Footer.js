import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="listagens">Listagens</Link></li>
            </ul>
        </footer>
    )

}

export default Footer;
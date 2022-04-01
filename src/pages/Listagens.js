import Lists from '../components/Lists/Lists';
import Evento from '../components/Eventos/Evento';
import Form from '../components/Form/Form';
import Condicional from '../components/Condicionais/Condicional';
import DinamicList from '../components/Lists/DinamicList';
import LogoList from "../assets/img/bike.png";

function Listagens() {

    const fixedGears = [
        'AL22',
        'All cities',
        'Dosnoventa',
        'Engine11',
        'Santa Fixie',
        'Bianchi Pista',
        'Affinity',
        'Look AL464P',
        'Canyon',
        'Fuji',
        '8bar',
        'Standert',
        'Liberty Bikes',
        'BMC',
        'Giant Omnium',
        'Tsunami',
        'Cannondale',
        'Cinelli',
        'Aventon',
        'Polo and Bike Williamsburg Team'
    ];


    return (
        <div>
            <Lists />
            <ul>
                <li>
                    <Evento info="Evento Exclusivo 1" />
                </li>
                <li>
                    <Evento info="Evento Exclusivo 2" />
                </li>
            </ul>
            <Form />
            <DinamicList itens={fixedGears} logoTitle={LogoList} />
            <Condicional />
        </div>
    )
}
export default Listagens;
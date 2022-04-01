import { useState } from 'react';
import StateLift from '../components/StateLift/StateLift';
import Saudacao from '../components/Saudacao/Saudacao';

function Home() {

    const [nome, setNome] = useState();

    return (

        <div className="container_StateLift">
            <StateLift setNome={setNome} />
            <p><Saudacao nome={nome} /></p>
        </div>

    )
}
export default Home;
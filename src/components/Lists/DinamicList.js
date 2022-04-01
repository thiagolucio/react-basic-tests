import "./Lists.css";

function DinamicList({ itens, logoTitle }) {
    return (
        <div className="body_list">
            <h3>Lista Dinâmica:</h3>
            <img src={logoTitle} alt="logo title list" title="Fixed Gears" />
            <ul>
                {itens.length > 0 ? (
                    
                    itens.map((item, index) => <li key={index}>{item}</li>)

                    ) : (
                        
                        <li><h3>Nenhum item encontrado</h3></li>
                    )
                }

            </ul>
        </div>
    );
}

export default DinamicList;
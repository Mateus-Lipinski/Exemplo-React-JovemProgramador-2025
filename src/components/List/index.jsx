import './style.css'

function List({ titulo, exibirPrimeiraLista }) {
    return (
        <section>
            <h2>{ titulo }</h2>

            { exibirPrimeiraLista ? <>alguma coisa</> :null }
            <h3>Lista não ordenada</h3>
            <ul id="listaUl">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button id="adicionarItem">Adicionar</button>

            <h3>Lista ordenada</h3>
            <ol>
                <li>Primeiro item</li>
                <li>Segundo item</li>
                <li>Terceiro item</li>
            </ol>
        </section>
    )
}

export default List
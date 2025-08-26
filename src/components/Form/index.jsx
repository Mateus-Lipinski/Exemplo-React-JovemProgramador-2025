import './style.css'

function Form() {
    return (
        <section class="last">
            <h2>Formulário simples</h2>
            <form>
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" required />
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label for="mensagem">Mensagem:</label><br />
                    <textarea name="mensagem" id="mensagem"></textarea>
                </div>

                <div>
                    <label for="idade">Idade:</label>
                    <input type="number" name="idade" id="idade" min="18" max="100" />
                </div>

                <div>
                    <label for="cor">Cor:</label>
                    <input type="color" name="cor" id="cor" />
                </div>

                <div>
                    <label for="anexo">Anexo:</label>
                    <input type="file" name="anexo" id="anexo" />
                </div>

                <button type="submit">Enviar</button>

                <button id="buttonExemploJS" type="button">
                    Exemplo JS
                </button>
            </form>
        </section>
    )
}

export default Form
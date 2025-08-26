import './style.css'

function Images() {
    return (
        <section>
            <h2>Imagens e Vídeos</h2>
            <h3>Imagem</h3>
            <figure>
                <img src="https://www.tribunapr.com.br/wp-content/uploads/2023/11/30101404/Cachorro-praia-1.jpg" alt="Imagem de um cachorro na praia" />
            </figure>

            <h3>Vídeo</h3>
            <iframe width="960" height="540" src="https://www.youtube.com/embed/zJ_EYvDeEKE?si=PDJOR76GpvZU5T-7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    )
}

export default Images
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import Images from './components/Images'
import Form from './components/Form'

function App() {
  return (
    <>
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo da página */}
      <main>
        <List titulo="Batata" exibirPrimeiraLista={true} />
        <List titulo="Aipim" />
        <Images />
        <Form />
      </main >

      {/* Rodapé */}
      <Footer />
    </>
  )
}

export default App

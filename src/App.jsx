import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      {/* Cabeçalho */}
      <Header />

      {/* Rotas */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>

      {/* Rodapé */}
      <Footer />
    </>
  )
}

export default App

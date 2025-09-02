import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return (
      <header>
        <h1>Minha página React</h1>
        <nav>
          <ul>
            <Link to='/'>
              <li>Inicio</li>
            </Link>
            <Link to='/about'>
              <li>Sobre</li>
            </Link>
          </ul>
        </nav>
      </header>
    )
}

export default Header
import { Link } from "react-router-dom"
import './style/PrincipalHeader.css'

const PrincipalHeader = () => {
  return (
    <header className="container">
        <h1 className="header__tittle"><Link to='/'>Hotels-App <img src="../../iconGeneral.png" alt="Hotels-App" /></Link></h1>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><Link to='/reservations'>Reservations</Link></li>
                <li className="header__item"><Link to='/register'>Register</Link></li>
                <li className="header__item"><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default PrincipalHeader
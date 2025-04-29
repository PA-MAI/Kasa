import '../../styles/css/header.css'
import logocolor from '../../assets/svg/LOGOcolor.svg'
import { Link } from 'react-router-dom'


function Header() {
    
        return (
        <header role="banner" className='kasa__header'>

            <div className='kasa__header--logo'>
                <img src={logocolor} alt='Logo Kasa' className='kasa__logo' />
                <nav className='kasa__header--nav'>
                    <ul className='kasa__header--ul'>
                    <li className='kasa__header--acceuil'><Link to="/">Accueil</Link></li>
                    <li className='kasa__header--apropos'><Link to="/Apropos">A propos</Link></li>
                    </ul>
                </nav>			
            </div>
        </header>
    )
}

export default Header
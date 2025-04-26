import '../styles/css/header.css'
import logocolor from '../assets/svg/LOGOcolor.svg'


function Header() {
    
        return (
        <header role="banner" className='kasa__header'>

            <div className='kasa__header--logo'>
                <img src={logocolor} alt='Logo Kasa' className='kasa__logo' />
                <div className='kasa__header--nav'>
                    <ul className='kasa__header--ul'>
                    <li className='kasa__header--btn1'>Accueil</li>
                    <li className='kasa__header--btn2'>A propos</li>
                    </ul>
                </div>			
            </div>
        </header>
    )
}

export default Header
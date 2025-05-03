import { Link } from 'react-router-dom'
import '../../styles/css/error.css'


function Error() {
   return (
        <div className="error">
            <h1>404</h1>
            <p className="error__oups">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error__accueil"><Link to="/">Retourner sur la page d'acceuil</Link></p>
        </div>
   )
}

export default Error

import '../../../styles/css/banner.css'
import banner from '../../../assets/img/cote.jpg'


function Banner(props) {

        return (
        <div  className='kasa__banner'>
            <div  className='kasa__banner--banner'>
                <img src={banner} alt='vue de la cote' className='kasa__banner--img' />
                <h1>Chez vous partout et ailleurs</h1>
            </div>
            
        </div>
    )
}

export default Banner


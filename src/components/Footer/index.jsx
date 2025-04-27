
import '../../styles/css/footer.css'
import logonb from '../../assets/svg/LOGONB.svg'

function Footer() {

		return (
		<footer className='kasa__footer'>

			<div className='kasa__footer--elem'>
				<img src={logonb} alt='Logo Kasa' className='kasa__logonb' />
				<div>© 2020 Kasa. All rights reserved</div>
			</div>

		</footer>
	)
}

export default Footer
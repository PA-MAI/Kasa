import "../../styles/css/banner.css";
import bannerImage from "../../assets/img/cote.jpg";
import BannerModel from "../../components/BannerModel";

function Banner() {
	return (
		<div>
			<BannerModel
				image={bannerImage}
				text="Chez vous, partout et ailleurs"
			/>
		</div>
	);
}

export default Banner;

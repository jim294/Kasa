import { Link } from "react-router-dom";

const Footer = () => {
    return (
		<footer>
			<Link to="/">
				<img src="./images/LogoBlanc.png" alt="Logo Kasa" />
			</Link>
			<p>&#169; 2020 Kasa. All rights reserved</p>
		</footer>
    );
};

export default Footer;
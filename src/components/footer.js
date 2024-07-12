import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import footerBackground from "../assets/footer-background-main.jpg";
import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
			fill={color}
		/>
	</svg>
);

const Footer = () => {
	return (
		<div
			className="footer-container"
			style={{ backgroundImage: `url(${footerBackground})` }}
		>
			<h1 className="footer-title">Gelateria Del CentrO</h1>
			<p className="footer-address">
				2017 TUOLUMNE ST in DOWNTOWN FRESNO |
				<a
					href="https://maps.app.goo.gl/B8edq4de6SGKTLyD8"
					className="footer-map-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					google maps
				</a>
			</p>
			<nav className="footer-nav">
				<a href="/our-story" className="footer-nav-link">
					OUR STORY
				</a>
				<a href="/menu" className="footer-nav-link">
					THE MENU
				</a>
				<Link
					to="contact-page-container"
					smooth={true}
					duration={500}
					className="footer-nav-link"
				>
					CONTACT
				</Link>
			</nav>
			<div className="footer-social">
				<a
					href="https://www.instagram.com/eatgelateria/?hl=en"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-social-link"
				>
					<Instagram size={24} />
				</a>
				<a
					href="https://www.facebook.com/eatgelateria/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-social-link"
				>
					<Facebook size={24} />
				</a>
				<a
					href="https://www.tiktok.com/@eatgelateria"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-social-link"
				>
					<TikTokIcon size={24} />
				</a>
			</div>
		</div>
	);
};

export default Footer;

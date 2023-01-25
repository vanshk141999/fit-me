/* eslint-disable jsx-a11y/alt-text */
import FooterLogo from "../assets/footer-logo.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-[#fc8018] flex flex-row items-center justify-center gap-32 py-8 px-36">
      <img src={FooterLogo} alt="footer-logo" className="w-32" />
      <a href="/">
        <ul className="flex gap-2 text-white text-sm">
          <li>About Us</li>
          <li>Delivery</li>
          <li>Help & Support</li>
          <li>T & C</li>
        </ul>
      </a>
      <a href="/">
        <ul className="flex gap-4 text-white text-xl">
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiInstagram />
          </li>
          <li>
            <FiTwitter />
          </li>
        </ul>
      </a>
    </div>
  );
}

export default Footer;

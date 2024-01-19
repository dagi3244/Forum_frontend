import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <div className="s-logo">
          <div className="logo">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
              alt="Logo"
            />
          </div>
          <div className="social-links">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Useful Link</h3>
          <ul>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Info</h3>
          <ul>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

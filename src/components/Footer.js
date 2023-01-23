import "./Footer.css";
import logo from "../images/logo_light.svg";
import fb_icon from "../images/fb_icon.svg";
import inst_icon from "../images/inst_icon.svg";
import twitter_icon from "../images/twitter_icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__text">bookstore.corp@gmail.com</p>
          <p className="footer__text">+(44) 712-316-4504</p>
        </div>
        <img src={logo}></img>
        <div className="social_media">
          <div className="social_media__wrapper">
            <img src={fb_icon} />
          </div>
          <div className="social_media__wrapper">
            <img src={inst_icon} />
          </div>
          <div className="social_media__wrapper">
            <img src={twitter_icon} />
          </div>
        </div>
      </div>
      <hr />
      <div className="credits__wrapper">
        <span className="credits">2023 BookStore © All rights reserved</span>
      </div>
    </div>
  );
}
export default Footer;

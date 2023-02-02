import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__text">bookstore.corp@gmail.com</p>
          <p className="footer__text">+(44) 712-316-4504</p>
        </div>
        <img src="../images/logo_light.svg" alt="logo"></img>
        <div className="social_media">
          <div className="social_media__wrapper">
            <img src="../images/fb_icon.svg" alt="facebook" />
          </div>
          <div className="social_media__wrapper">
            <img src="../images/inst_icon.svg" alt="instagram" />
          </div>
          <div className="social_media__wrapper">
            <img src="../images/twitter_icon.svg" alt="twitter" />
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

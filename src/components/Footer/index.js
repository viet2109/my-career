import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./Footer.module.scss";

Footer.propTypes = {};

const cx = classNames.bind(styles);

function Footer({ className }) {
  return (
    <footer className={cx("wrapper", className)}>
      <div className={cx("container")}>
        <div className={cx("left")}>
          <img className={cx("logo")} src={images.logo} alt="logo" />
          <div className={cx("address")}>
            <strong>Địa chỉ: </strong> 16TT35, Khu đô thị Văn Phú, Hà Đông, Hà
            Nội
          </div>

          <div className={cx("contact")}>
            <a href="tel:+84917225055" className={cx("phone")}>
              <FontAwesomeIcon className="phone-icon" icon={faPhone} />
              0917 225 055
            </a>
            <a
              href="mailto:huongnghiep.mycareer@gmail.com"
              className={cx("email")}
            >
              <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
              huongnghiep.mycareer@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={cx("line-copyright")}>Copyright © 2024 MyCareer</div>
    </footer>
  );
}

export default Footer;

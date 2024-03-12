import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

Footer.propTypes = {};

const cx = classNames.bind(styles);

function Footer({ className }) {
  return (
    <footer className={cx("wrapper", className)}>
      <div className={cx("container")}>
        <div className={cx("left")}>
          <img className={cx("logo")} src={images.logo} alt="logo" />
          <div className={cx("address")}>
            <strong>Địa chỉ: </strong> Đường 60 CL, Khu đô thị Cát Lái, P. Cát
            Lái, TP. Thủ Đức, TP.HCM
          </div>

          <div className={cx('contact')}>
              <a href="tel:+84949263226" className={cx("email")}>
              <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                0949 263 226
              </a>
              <a href="mailto:huongnghiep@rightpath.edu.vn" className={cx("email")}>
                <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
                huongnghiep@rightpath.edu.vn
              </a>
          </div>
        </div>
        <div className={cx("right")}>

            <ul className={cx('contact-list')}>
                <li className={cx('contact-item')}>
                    <span>FAQs</span>
                    <div className={cx('link-wrapper')}>
                        <a href="#" >Form</a>
                        <a href="#" >Khảo sát</a>
                    </div>
                </li>
                <li className={cx('contact-item')}>
                <span>Kênh liên kết</span>
                    <div className={cx('link-wrapper')}>
                        <a href="#" >Facebook</a>
                        <a href="#" >Youtube</a>
                        <a href="#" >Thống kê</a>
                        <a href="#" >Jobshop</a>
                    </div>
                </li>
                <li className={cx('contact-item')}>
                <span>Sinh viên tương lai</span>
                    <div className={cx('link-wrapper')}>
                        <a href="#" >Sách tra cứu nghề ILO</a>
                        <a href="#" >Không gian đại học</a>
                        <a href="#" >Tư vấn tuyển sinh</a>
                    </div>
                </li>
                <li className={cx('contact-item')}>
                <span>Liên hệ</span>
                    <div className={cx('link-wrapper')}>
                        
                    </div>
                </li>
            </ul>
        </div>
      </div>
      <div className={cx("line-copyright")}>
        Copyright © 2021 Rightway, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

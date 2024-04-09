import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "~/assets/images";
import styles from "./AuthForm.module.scss";

AuthForm.propTypes = {};

const cx = classNames.bind(styles);

function AuthForm({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner")}>
        <div className={cx("logo-wrapper")}>
          <img className={cx("logo")} src={images.logo} alt="logo" />
        </div>
        <Swiper
          loop
          pagination
          centeredSlides
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          style={{
            "--swiper-pagination-color": "var(--red)",
          }}
        >
          <SwiperSlide>
            <div className={cx("slide-container")}>
              <img src={images["slide-auth-1"]} alt="slide1" />
              <div className={cx("des")}>
                <p>Chào mừng bạn đến với</p>
                <p>MẠNG XÃ HỘI HƯỚNG NGHIỆP</p>
                <p>Đầu tiên ở Việt Nam</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cx("slide-container")}>
              <img src={images["slide-auth-3"]} alt="slide2" />
              <div className={cx("des")}>
                <p>Hướng nghiệp trong tầm tay</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cx("slide-container")}>
              <img src={images["slide-auth-2"]} alt="slide3" />
              <div className={cx("des")}>
                <p>Làm trắc nghiệm nghề nghiệp</p>
                <p>Kết nối chuyên gia</p>
                <p>Đăng kí tham quan các trường</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={cx("form-container")}>{children}</div>
    </div>
  );
}

export default AuthForm;

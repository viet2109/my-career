import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import images from "~/assets/images";
import routes from "~/config/routes";
import MenuButton from "../MenuButton";
import styles from "./Header.module.scss";
import Popper from "../Popper";
import { Fragment } from "react";

Header.propTypes = {};

const cx = classNames.bind(styles);

function Header({ className }) {
  const handleClickMenuButton = (e) => {};
  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <header className={cx("wrapper")}>
      <nav className={cx("nav", className)}>
        <MenuButton
          className={cx("menu-button")}
          onClick={handleClickMenuButton}
        ></MenuButton>
        <Link to={routes.home} className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </Link>
        <ul className={cx("menu")}>
          <li className={cx("item")}>
            <Tippy
              offset={[0, 0]}
              animation="perspective"
              arrow={<Fragment></Fragment>}
              content={
                <Popper>
                  <ul className={cx("sub-menu")}>
                    <li className={cx("sub-item")}>
                      <Link to={routes["about-us"].misson}>
                        Sứ mệnh RightPath
                      </Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes["about-us"].team}>Đội ngũ cố vấn</Link>
                    </li>
                  </ul>
                </Popper>
              }
              interactive
            >
              <Link to={routes["about-us"].index}>Về chúng tôi</Link>
            </Tippy>
          </li>

          <li className={cx("item")}>
            <Tippy
              offset={[0, 0]}
              animation="perspective"
              arrow={<Fragment></Fragment>}
              content={
                <Popper>
                  <ul className={cx("sub-menu")}>
                    <li className={cx("sub-item")}>
                      <Link to={routes.course.pupil}>
                        Học sinh
                      </Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes.course.student}>Sinh viên</Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes.course.graduate}>Cử nhân/kĩ sư</Link>
                    </li>
                  </ul>
                </Popper>
              }
              interactive
            >
              <Link to={"#"}>Khóa học</Link>
            </Tippy>
          </li>

          <li className={cx("item")}>
            <Tippy
              offset={[0, 0]}
              animation="perspective"
              arrow={<Fragment></Fragment>}
              content={
                <Popper>
                  <ul className={cx("sub-menu")}>
                    <li className={cx("sub-item")}>
                      <Link to={routes.quiz.holland}>
                        Trăc nghiệm sở thích Holland
                      </Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes.quiz.disc}>Trắc nghiệm tính cách DISC</Link>
                    </li>
                  </ul>
                </Popper>
              }
              interactive
            >
              <Link to={"#"}>Trắc nghiệm bản thân</Link>
            </Tippy>
          </li>

          <li className={cx("item")}>
            <Tippy
              offset={[0, 0]}
              animation="perspective"
              arrow={<Fragment></Fragment>}
              content={
                <Popper>
                  <ul className={cx("sub-menu")}>
                    <li className={cx("sub-item")}>
                      <Link to={routes.career.major}>
                        Ngành học
                      </Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes.career.school}>Trường học</Link>
                    </li>
                    <li className={cx("sub-item")}>
                      <Link to={routes.career.team}>Đội ngũ chuyên gia</Link>
                    </li>
                  </ul>
                </Popper>
              }
              interactive
            >
              <Link to={routes.career.index}>360º ngành nghề</Link>
            </Tippy>
          </li>

          <li className={cx("item")}>
            <Tippy
              offset={[0, 0]}
              animation="perspective"
              arrow={<Fragment></Fragment>}
              content={
                <Popper>
                  <ul className={cx("sub-menu")}>
                    <li className={cx("sub-item")}>
                      <Link to={routes.event.schedule}>
                        Lịch trình sự kiện
                      </Link>
                    </li>

                    <li className={cx("sub-item")}>
                      <Link to={routes.event.book}>Đặt lịch tư vấn</Link>
                    </li>
                  </ul>
                </Popper>
              }
              interactive
            >
              <Link to={"#"}>Sự kiện</Link>
            </Tippy>
          </li>
        </ul>
        <Link to={user ? "/" : routes.signin} className={cx("user-login")}>
          <img src={images["user-avatar"]} alt="avatar" />
          {user ? <span>Hồ sơ</span> : <span>Đăng nhập</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;

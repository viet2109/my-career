import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import images from "~/assets/images";
import routes from "~/config/routes";
import MenuButton from "../MenuButton";
import styles from "./Header.module.scss";
import Popper from "../Popper";
import { Fragment, useRef } from "react";
import { HashLink } from "react-router-hash-link";

Header.propTypes = {};

const cx = classNames.bind(styles);

function Header({ className }) {
  const handleClickMenuButton = (e) => {};
  const user = useSelector((state) => state.auth.login.currentUser);
  const nav = useRef(null);
  const menuButton = useRef(null);
  console.log(useLocation().pathname);

  return (
    <header className={cx("wrapper")}>
      <div className={cx('nav-wrapper')}>
        <Tippy
          maxWidth={""}
          onMount={(instance) => {instance.popper.style.margin ="0 auto";instance.popper.style.width = "100%";}}
          placement="bottom-start"
          trigger={"click"}
          arrow={false}
          animation="perspective"
          offset={[0, 0]}
          triggerTarget={menuButton.current}
          interactive
          
          hideOnClick='toggle'
          content={
            <Popper>
              <ul className={cx("menu-mobile")}>
                <li className={cx("item-mobile")}>
                  <NavLink
                    to={routes["about-us"].index}
                    className={(nav) => cx({ active: nav.isActive })}
                  >
                    Về chúng tôi
                  </NavLink>
                  <ul className={cx("sub-menu-mobile")}>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes["about-us"].misson}
                      >
                        Sứ mệnh RightPath
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes["about-us"].team}
                      >
                        Đội ngũ cố vấn
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className={cx("item-mobile")}>
                  <HashLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={"#"}
                  >
                    Khóa học
                  </HashLink>
                  <ul className={cx("sub-menu-mobile")}>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.course.pupil}
                      >
                        Học sinh
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.course.student}
                      >
                        Sinh viên
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.course.graduate}
                      >
                        Cử nhân/kĩ sư
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className={cx("item-mobile")}>
                  <HashLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={"#"}
                  >
                    Trắc nghiệm bản thân
                  </HashLink>
                  <ul className={cx("sub-menu-mobile")}>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.quiz.holland}
                      >
                        Trăc nghiệm sở thích Holland
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.quiz.disc}
                      >
                        Trắc nghiệm tính cách DISC
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className={cx("item-mobile")}>
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={routes.career.index}
                  >
                    360º ngành nghề
                  </NavLink>
                  <ul className={cx("sub-menu-mobile")}>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.career.major}
                      >
                        Ngành học
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.career.school}
                      >
                        Trường học
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.career.team}
                      >
                        Đội ngũ chuyên gia
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className={cx("item-mobile")}>
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to="#"
                  >
                    Sự kiện
                  </NavLink>
                  <ul className={cx("sub-menu-mobile")}>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.event.schedule}
                      >
                        Lịch trình sự kiện
                      </NavLink>
                    </li>
                    <li className={cx("sub-item-mobile")}>
                      <NavLink
                        className={(nav) => cx({ active: nav.isActive })}
                        to={routes.event.book}
                      >
                        Đặt lịch tư vấn
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </Popper>
          }
        >
          <nav ref={nav} className={cx("nav", className)}>
            <div className={cx('menu-button-wrapper')} ref={menuButton}>
              <MenuButton
                ref={menuButton}
                className={cx("menu-button")}
                onClick={handleClickMenuButton}
              ></MenuButton>
            </div>
            <Link to={routes.home} className={cx("logo")}>
              <img src={images.logo} alt="logo" />
            </Link>
            <ul className={cx("menu")}>
              <li className={cx("item")}>
                <Tippy
                  hideOnClick={false}
                  offset={[0, 0]}
                  animation="perspective"
                  arrow={false}
                  content={
                    <Popper>
                      <ul className={cx("sub-menu")}>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes["about-us"].misson}
                          >
                            Sứ mệnh RightPath
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes["about-us"].team}
                          >
                            Đội ngũ cố vấn
                          </NavLink>
                        </li>
                      </ul>
                    </Popper>
                  }
                  interactive
                >
                  <NavLink
                    to={routes["about-us"].index}
                    className={(nav) => cx({ active: nav.isActive })}
                  >
                    Về chúng tôi
                  </NavLink>
                </Tippy>
              </li>
              <li className={cx("item")}>
                <Tippy
                hideOnClick={false}
                  offset={[0, 0]}
                  animation="perspective"
                  arrow={false}
                  content={
                    <Popper>
                      <ul className={cx("sub-menu")}>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.course.pupil}
                          >
                            Học sinh
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.course.student}
                          >
                            Sinh viên
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.course.graduate}
                          >
                            Cử nhân/kĩ sư
                          </NavLink>
                        </li>
                      </ul>
                    </Popper>
                  }
                  interactive
                >
                  <HashLink
                    
                    className={(nav) => cx({ active: nav.isActive })}
                    to={"#"}
                  >
                    Khóa học
                  </HashLink>
                </Tippy>
              </li>
              <li className={cx("item")}>
                <Tippy
                hideOnClick={false}
                  offset={[0, 0]}
                  animation="perspective"
                  arrow={false}
                  content={
                    <Popper>
                      <ul className={cx("sub-menu")}>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.quiz.holland}
                          >
                            Trăc nghiệm sở thích Holland
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.quiz.disc}
                          >
                            Trắc nghiệm tính cách DISC
                          </NavLink>
                        </li>
                      </ul>
                    </Popper>
                  }
                  interactive
                >
                  <HashLink

                    className={(nav) => cx({ active: nav.isActive })}
                    to={"#"}
                  >
                    Trắc nghiệm bản thân
                  </HashLink>
                </Tippy>
              </li>
              <li className={cx("item")}>
                <Tippy
                hideOnClick={false}
                  offset={[0, 0]}
                  animation="perspective"
                  arrow={false}
                  content={
                    <Popper>
                      <ul className={cx("sub-menu")}>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.career.major}
                          >
                            Ngành học
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.career.school}
                          >
                            Trường học
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.career.team}
                          >
                            Đội ngũ chuyên gia
                          </NavLink>
                        </li>
                      </ul>
                    </Popper>
                  }
                  interactive
                >
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={routes.career.index}
                  >
                    360º ngành nghề
                  </NavLink>
                </Tippy>
              </li>
              <li className={cx("item")}>
                <Tippy
                hideOnClick={false}
                  offset={[0, 0]}
                  animation="perspective"
                  arrow={false}
                  content={
                    <Popper>
                      <ul className={cx("sub-menu")}>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.event.schedule}
                          >
                            Lịch trình sự kiện
                          </NavLink>
                        </li>
                        <li className={cx("sub-item")}>
                          <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={routes.event.book}
                          >
                            Đặt lịch tư vấn
                          </NavLink>
                        </li>
                      </ul>
                    </Popper>
                  }
                  interactive
                >
                  <HashLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={"#"}
                  >
                    Sự kiện
                  </HashLink>
                </Tippy>
              </li>
            </ul>
            <Link to={user ? "/" : routes.signin} className={cx("user-login")}>
              <img src={images["user-avatar"]} alt="avatar" />
              {user ? <span>Hồ sơ</span> : <span>Đăng nhập</span>}
            </Link>
          </nav>
        </Tippy>
      </div>
    </header>
  );
}

export default Header;

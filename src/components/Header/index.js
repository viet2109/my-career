import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "tippy.js/animations/perspective.css";
import "tippy.js/dist/tippy.css";
import images from "~/assets/images";
import routes from "~/config/routes";
import { logOutUser } from "~/redux/request";
import MenuButton from "../MenuButton";
import Popper from "../Popper";
import styles from "./Header.module.scss";

Header.propTypes = {};

const cx = classNames.bind(styles);

function Header({ className }) {
  const handleClickMenuButton = (e) => {};
  const user = useSelector((state) => state.auth.login.currentUser);
  const nav = useRef(null);
  const menuButton = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_login = useRef(null);
  const handleOnclick = (e) => {
    menuButton.current.firstChild.click();
   
  };
  const handleOnClickOutside = (e) => {
    user_login.current?.click();
  };

  const handleLogout = () => {
    logOutUser(user.token, dispatch, navigate);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav-wrapper")}>
        <Tippy
          maxWidth={""}
          onMount={(instance) => {
            instance.popper.style.margin = "0 auto";
            instance.popper.style.width = "100%";
          }}
          placement="bottom-start"
          trigger={"click"}
          arrow={false}
          animation="perspective"
          offset={[0, 7]}
          reference={menuButton}
          interactive
          hideOnClick="toggle"
          onClickOutside={handleOnclick}
          content={
            <Popper>
              <ul className={cx("menu-mobile")}>
                <li className={cx("item-mobile")} onClick={handleOnclick}>
                  <NavLink
                    to={routes["about-us"]}
                    className={(nav) => cx({ active: nav.isActive })}
                  >
                    Về chúng tôi
                  </NavLink>
                </li>

                <li className={cx("item-mobile")} onClick={handleOnclick}>
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={routes.quiz}
                  >
                    Trắc nghiệm bản thân
                  </NavLink>
                </li>

                <li className={cx("item-mobile")} onClick={handleOnclick}>
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={routes.advise}
                  >
                    Tư vấn chuyên gia
                  </NavLink>
                </li>

                <li className={cx("item-mobile")} onClick={handleOnclick}>
                  <NavLink
                    className={(nav) => cx({ active: nav.isActive })}
                    to={routes.experience}
                  >
                    Trải nghiệm nghề nghiệp
                  </NavLink>
                </li>
              </ul>
            </Popper>
          }
        >
          <nav ref={nav} className={cx("nav", className)}>
            <div className={cx("menu-button-wrapper")} ref={menuButton}>
              <MenuButton
                className={cx("menu-button")}
                onClick={handleClickMenuButton}
              ></MenuButton>
            </div>
            <Link to={routes.home} className={cx("logo")}>
              <img src={images.logo} alt="logo" />
            </Link>

            <ul className={cx("menu")}>
              <li className={cx("item")}>
                <NavLink
                  to={routes["about-us"]}
                  className={(nav) => cx({ active: nav.isActive })}
                >
                  <span>Về chúng tôi</span>
                </NavLink>
              </li>

              <li className={cx("item")}>
                <NavLink
                  className={(nav) => cx({ active: nav.isActive })}
                  to={routes.quiz}
                >
                  <span>Trắc nghiệm bản thân</span>
                </NavLink>
              </li>

              <li className={cx("item")}>
                <NavLink
                  className={(nav) => cx({ active: nav.isActive })}
                  to={routes.advise}
                >
                  <span>Tư vấn chuyên gia</span>
                </NavLink>
              </li>

              <li className={cx("item")}>
                <NavLink
                  className={(nav) => cx({ active: nav.isActive })}
                  to={routes.experience}
                >
                  <span>Trải nghiệm nghề nghiệp</span>
                </NavLink>
              </li>
            </ul>

            {user ? (
              <Tippy
                interactive
                arrow={false}
                reference={user_login}
                trigger="click"
                hideOnClick="toggle"
                onClickOutside={handleOnClickOutside}
                content={
                  <Popper className={cx("popper")}>
                    <div onClick={handleOnClickOutside}>
                      <Link to={routes.profile} className={cx("link-wrapper")}>
                        <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                        <span>Hồ sơ</span>
                      </Link>
                    </div>

                    <div
                      className={cx("link-wrapper", "signup")}
                      onClick={(e) => {
                        handleOnClickOutside(e);
                        handleLogout(e);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className={cx("icon")}
                      />
                      <span>Đăng xuất</span>
                    </div>
                  </Popper>
                }
              >
                <div ref={user_login} className={cx("user-login")}>
                  <img src={images["user-avatar"]} alt="avatar" />
                  {user ? <span>{user.name}</span> : <span>Đăng nhập</span>}
                </div>
              </Tippy>
            ) : (
              <Link to={routes.signin} className={cx("user-login")}>
                <img src={images["user-avatar"]} alt="avatar" />
                <span>Đăng nhập</span>
              </Link>
            )}
          </nav>
        </Tippy>
      </div>
    </header>
  );
}

export default Header;

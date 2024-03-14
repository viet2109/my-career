import Tippy, { tippy } from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "tippy.js/animations/perspective.css";
import "tippy.js/dist/tippy.css";
import images from "~/assets/images";
import routes from "~/config/routes";
import MenuButton from "../MenuButton";
import Popper from "../Popper";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

const cx = classNames.bind(styles);

function Header({ className }) {
  const handleClickMenuButton = (e) => {

  };
  const user = useSelector((state) => state.auth.login.currentUser);
  const nav = useRef(null);
  const menuButton = useRef(null);
  const handleOnclick = (e) => {
  
    menuButton.current.firstChild.click();
  }

  
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
          hideOnClick='toggle'
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
            <div className={cx("menu-button-wrapper")} ref={menuButton} >
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

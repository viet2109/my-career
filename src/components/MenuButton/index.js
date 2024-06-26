import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./MenuButton.module.scss"

MenuButton.propTypes = {
    
};

const cx = classNames.bind(styles)

function MenuButton({className, onClick}) {

    const menu = useRef(null);

    const handleClickMenuButton = (e) => {
        onClick(e);
        menu.current.classList.toggle(cx('active'))
    }

    return (
        <div ref={menu} className={cx('wrapper',  className)} onClick={handleClickMenuButton}>
            <span></span>
        </div>
    );
}

export default MenuButton;
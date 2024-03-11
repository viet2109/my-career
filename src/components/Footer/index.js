import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./Footer.module.scss"

Footer.propTypes = {
    
};

const cx = classNames.bind(styles)

function Footer({className}) {
    return (
        <div className={cx('warpper', className)}>
            
        </div>
    );
}

export default Footer;
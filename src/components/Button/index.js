import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./Button.module.scss";
import { Link } from 'react-router-dom';

Button.propTypes = {
    
};

const cx = classNames.bind(styles);

function Button({children, to, className}) {
    return (
        <Link className={cx('wrapper', className)} to={to}>
            {children}
        </Link>
    );
}

export default Button;
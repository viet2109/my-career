import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./FormQuiz.module.scss"


FormQuiz.propTypes = {
    
};

const cx = classNames.bind(styles);

function FormQuiz(props) {
    return (
        <div className={cx('wrapper')}>
            <form className={cx('form')}>

            </form>
        </div>
    );
}

export default FormQuiz;
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss'
Loading.propTypes = {
    
};

const cx = classNames.bind(styles)
function Loading(props) {
    const { text, isLoading } = props;
    return (
        <div className={cx(isLoading ? "loading-wrapper":"none")}>
            <div className={cx('loading')}>
                <div className={cx('text')}>{text}</div>
                <span className={cx('ring')}></span>
            </div>
        </div>
    );
}

export default Loading;
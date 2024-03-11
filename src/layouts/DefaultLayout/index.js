import React from "react";
import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

DefaultLayout.propTypes = {
    children: PropTypes.any.isRequired
};

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header className={cx('header')}></Header>
      <div className={cx('content')}>
        {children}
      </div>
      <Footer className={cx('footer')}></Footer>
    </div>
  );
}

export default DefaultLayout;

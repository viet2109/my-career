import classNames from "classnames/bind";
import styles from "./Experience.module.scss";

Experience.propTypes = {};

const cx = classNames.bind(styles);

function Experience(props) {
  
  return (
    <div className={cx('wrapper')}>experience</div>
  );
}

export default Experience;

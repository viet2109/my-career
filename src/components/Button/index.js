import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss";

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
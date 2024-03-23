import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss";

Button.propTypes = {
    
};

const cx = classNames.bind(styles);

function Button({children, to, className}) {

    let Component = 'button';
    if (to) {
        Component = Link;
    }
    return (
        <Component className={cx('wrapper', className)} to={to}>
            {children}
        </Component>
    );
}

export default Button;
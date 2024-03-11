import "./GlobalStyles.scss"
import PropTypes from 'prop-types';

GlobalStyles.propTypes = {
    children: PropTypes.any.isRequired
};

function GlobalStyles({children}) {
    return children;
}

export default GlobalStyles;
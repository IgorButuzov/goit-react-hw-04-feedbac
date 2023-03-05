import PropTypes from "prop-types";

import css from 'components/Notification/NotifiMessage.module.css'

const NotfiMessage = ({message}) => (
    <>
    <p className={css.notify}>{message}</p>
    <img className={css.img} src="https://www.tlnt.com/wp-content/uploads/sites/4/2017/05/No-more-feedback-700x467.jpg" alt="" />
    </>
);

NotfiMessage.propTypes = {
    message: PropTypes.string.isRequired,
 };

export default NotfiMessage;
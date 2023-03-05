import PropTypes from "prop-types";

import css from 'components/FeedbackOptions/FeedbackOpt.module.css'

const FeedbackOpt = ({onGoodClick,onNeutralClick,onBadClick}) => (
    <div className={css.buttons}>
            <button 
            type="button"
            onClick={onGoodClick}
            >Good</button>
            <button 
            type="button"
            onClick={onNeutralClick}
            >Neutral</button>
            <button 
            type="button"
            onClick={onBadClick}
            >Bad</button>
    </div>
);

FeedbackOpt.propTypes = {
    onGoodClick: PropTypes.func,
    onNeutralClick: PropTypes.func,
    onBadClick: PropTypes.func,   
  };

export default FeedbackOpt;
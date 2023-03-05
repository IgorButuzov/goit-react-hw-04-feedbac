import PropTypes from "prop-types";

import NotfiMessage from 'components/Notification/NotifiMessage'

import css from "components/Statistics/Statistics.module.css";

const Statistics = ({good,neutral,bad,total,positive}) => (
    total === 0 ? 
    (<NotfiMessage 
    message="There is no feedback"
    />) :
    (<>
    <div className={css.statBox}>
    <p className={css.statTitle}>Statistics</p>
    <ul className={css.statList}>
        <li className={css.statItem}>Good: {good}</li>
        <li className={css.statItem}>Neutral: {neutral}</li>
        <li className={css.statItem}>Bad: {bad}</li>
        <li className={css.statItem}>Total: {total}</li>
        <li className={css.statPos}>Positive feedback: {positive}%</li>
    </ul>
    </div>
    </>)
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
    
  };

export default Statistics;
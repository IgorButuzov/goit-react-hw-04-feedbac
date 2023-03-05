import {useState} from 'react';
import PropTypes from "prop-types";

import Statistics from 'components/Statistics/Statistics'
import FeedbackOpt from 'components/FeedbackOptions/FeedbackOpt'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const App = ({startValue}) => {
  
  const [good, setGood] = useState(startValue);
  const [neutral, setNeutral] = useState(startValue);
  const [bad, setBad] = useState(startValue);
  
const onLiveFeddback =e=>{
const buttonName = e.target.innerText;

switch (buttonName) {
  case 'Good':
    setGood(state => state + 1);
    break;
    case 'Neutral':
    setNeutral(state => state + 1);
    break;
    case 'Bad':
    setBad(state => state + 1);
    break;

  default:
    break;
}
};
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  
   
    return (
      <>
      <SectionTitle />
      <FeedbackOpt 
      onGoodClick = {onLiveFeddback}
      onNeutralClick = {onLiveFeddback}
      onBadClick = {onLiveFeddback}
      />
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {countTotalFeedback()}
      positive = {countPositiveFeedbackPercentage()}
      />
      </>
    ); 
   
  }

  App.propTypes = {
    startValue: PropTypes.number.isRequired,
  };
  
  export default App;

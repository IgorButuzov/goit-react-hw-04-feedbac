import React from 'react';
import PropTypes from "prop-types";

import Statistics from 'components/Statistics/Statistics'
import FeedbackOpt from 'components/FeedbackOptions/FeedbackOpt'
import SectionTitle from 'components/SectionTitle/SectionTitle'

class App extends React.Component {
  static defaultProps = {
    startValue: 0,
  }

  static propTypes = {
    startValue: PropTypes.number.isRequired,
  };
  
  state = {
    good: this.props.startValue,
    neutral: this.props.startValue,
    bad: this.props.startValue,
  }
  
  onGoodClick = () => {
    this.setState(prevValue => {
      return {
        good: prevValue.good + 1,
      };
    })
  };
  onNeutralClick = () => {
    this.setState(prevValue => {
      return {
        neutral: prevValue.neutral + 1,
      };
    })
  };
  onBadClick = () => {
    this.setState(prevValue => {
      return {
        bad: prevValue.bad + 1,
      };
    })
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };
  
   render () {
    return (
      <>
      <SectionTitle />
      <FeedbackOpt 
      onGoodClick = {this.onGoodClick}
      onNeutralClick = {this.onNeutralClick}
      onBadClick = {this.onBadClick}
      />
      <Statistics 
      good = {this.state.good}
      neutral = {this.state.neutral}
      bad = {this.state.bad}
      total = {this.countTotalFeedback()}
      positive = {this.countPositiveFeedbackPercentage()}
      />
      </>
    ); 
   }
  }
  
  export default App;

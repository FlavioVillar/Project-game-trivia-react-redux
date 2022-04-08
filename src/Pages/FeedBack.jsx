import React, { Component } from 'react';
import HeaderFeedback from '../components/HeaderFeeback';

class FeedBack extends Component {
  render() {
    return (
      <div>
        <HeaderFeedback />
        <h1 data-testid="feedback-text">FeedBack</h1>
      </div>
    );
  }
}

export default FeedBack;

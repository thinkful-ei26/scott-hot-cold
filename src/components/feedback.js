import React from 'react';

export default function Feedback(props) {
  const feedback = props.feedback;

  return (
    <h2 id="feedback">{feedback}</h2> //props.feedback will display saying hot or cold
  );
}

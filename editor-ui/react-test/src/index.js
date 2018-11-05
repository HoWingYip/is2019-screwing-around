import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class VideoControls extends React.Component {
  render() {
    return(
      <div>TESTING</div>
    );
  }
}

var elementsToRender = document.getElementsByClassName("controls");
for(var elementNum in elementsToRender) {
  ReactDOM.render(
    <VideoControls />,
    document.getElementsByClassName("controls")[elementNum]
  );
}
import React from 'react';
import PropTypes from 'prop-types';

class Markers extends React.Component {

  render() {
    let verseMarkers = this.props.text;
    const markerLength = verseMarkers.length;
    let x = '-8';

    if (markerLength > 2) {
      x = '-12';
    }
    if (markerLength > 3) {
      verseMarkers = '';
    }

    return (

      <g
        transform={this.props.translate}
      >
        <polygon
        // points="0,30 10,20 10,40 0,50 -10,40 -10,20"
          points="0,20 15,10 15,40 0,50 -15,40 -15,10"
          style={{ fill: 'F0FF36', stroke: '504C4C', strokeWidth: 0.3 }}
        />
        <text x={x} y="35" fontFamily="roboto" fontSize="13" fill="#777373" >{verseMarkers}</text>
      </g>
    );
  }

}


Markers.propTypes = {
  translate: PropTypes.string.isRequired
};
Markers.contextTypes = {
  color: PropTypes.string
};

export default Markers;


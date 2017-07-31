import React from 'react';
import PropTypes from 'prop-types';

class Markers extends React.Component {

  render() {
    let verseMarkers = this.props.text;
    const markerLength = verseMarkers.length;
    let x = '-7';
    let position = this.props.translate;

    if (markerLength === 1) {
      x = '-4';
    }
    if (markerLength > 2) {
      x = '-10';
    }
    if (markerLength > 3) {
      verseMarkers = '';
    }
    if (position === 'translate(0)') {
      position = 'translate(12)';
    }

    return (

      <g
        transform={position}
      >
        <polygon
               //points="0,10 15,10 15,40 0,30 -15,40 -15,10"
          points=" 0,10 12,10 12,40 0,30 -12,40 -12 80 -15 80 -12,10 "
          style={{ fill: 'F0FF36', stroke: '504C4C', strokeWidth: 0.3 }}
        />
        <text x={x} y="25" fontFamily="roboto" fontSize="11" fill="#3B3935" >{verseMarkers}</text>
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


import React from 'react';
import PropTypes from 'prop-types';

class Markers extends React.Component {

  render() {
    return (<g
      transform={this.props.translate}
    >
      <polygon
        // points="0,30 10,20 10,40 0,50 -10,40 -10,20"
        points="0,20 15,10 15,40 0,50 -15,40 -15,10"
        style={{ fill: 'F0FF36', stroke: '504C4C', strokeWidth: 0.3, overflow: 'visible' }}
      />
      <text x="-10" y="35" font-family="Verdana" font-size="55" fill="black" overflow={'visible'}>{this.props.text}</text>
    </g>);
  }

}


Markers.propTypes = {
  translate: PropTypes.string.isRequired
};
Markers.contextTypes = {
  color: PropTypes.string
};

export default Markers;


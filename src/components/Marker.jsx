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
        style={{ fill: 'F0FF36', stroke: '504C4C', strokeWidth: 0.3 }}
      />
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


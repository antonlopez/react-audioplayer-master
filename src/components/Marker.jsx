import React from 'react';
import PropTypes from 'prop-types';

class Markers extends React.Component {

  render() {
    return (<g
      transform={this.props.translate}
    >
      <polygon
          // points="60,40 100,20 100,80 60,100 20,80 20,20"
        // points="30,20 50,10 50,40 30,50 10,40 10,10"
          // points="0,20 50,10 50,40 0,50 10,40 10,10"
        points="0,30 10,20 10,40 0,50 -10,40 -10,20"
        style={{ fill: 'F0FF36', stroke: '504C4C', strokeWidth: .3 }}
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


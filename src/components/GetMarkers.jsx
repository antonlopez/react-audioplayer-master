import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const GetMarkers = Audio => class GetMarkersComponent extends React.Component {
    static propTypes = {
    playlist: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
      img: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        content: PropTypes.string
      }))
    })).isRequired
  };

};

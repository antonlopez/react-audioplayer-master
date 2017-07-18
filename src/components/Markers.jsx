import React from 'react';
import PropTypes from 'prop-types';

const Markers = ({
                                width,
                                height,
                                translate,
                                visibility,
                                onMouseDown
                            }, { color }) => (
                              <g
                                visibility={visibility ? 'visible' : 'hidden'}
                                transform={translate}
                                onMouseDown={onMouseDown}
                              >
                                <circle cx="1" cy="5" r="10" />
                              </g>
);
Markers.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  translate: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func.isRequired
};
Markers.contextTypes = {
  color: PropTypes.string
};

export default Markers;


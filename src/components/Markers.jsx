import React from 'react';
import PropTypes from 'prop-types';

const Markers = ({
                                width,
                                height,
                                translate,
                                visibility,
                                onMouseDown
                            }) => (
                              <g
                                transform={translate}
                                onMouseDown={onMouseDown}
                              >
                                <polygon
                                  // points="60,40 100,20 100,80 60,100 20,80 20,20"
                                  points="30,20 50,10 50,40 30,50 10,40 10,10"
                                />
                              </g>
);
Markers.propTypes = {
  translate: PropTypes.string.isRequired
};
Markers.contextTypes = {
  color: PropTypes.string
};

export default Markers;


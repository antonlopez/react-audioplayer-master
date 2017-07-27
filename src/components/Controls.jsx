import React from 'react';
import PropTypes from 'prop-types';
import * as Buttons from './buttons/index';
import VolumeContainer from './VolumeContainer';
import ButtonGroup from './ButtonGroup';

const Controls = ({
  playing,
  volume,
  playingState,
  setVolume,
  togglePlayPause,
  record,
  skipToNext,
  skipToPrevious,
  volumeOrientationDown,

}) => {
  let PlayPauseBtn;
  let PlayingStateBtn;
  switch (playing) {
    case true:
      PlayPauseBtn = Buttons.PauseBtn;
      break;
    case false:
      PlayPauseBtn = Buttons.PlayBtn;
      break;
    default:
      break;
  }
  switch (playingState) {
    case 0:
      PlayingStateBtn = Buttons.CycleBtn;
      break;
    case 1:
      PlayingStateBtn = Buttons.RepeatBtn;
      break;
    case 2:
      PlayingStateBtn = Buttons.ShuffleBtn;
      break;
    default:
      break;
  }
  return (
    <ButtonGroup>
      <PlayPauseBtn onClick={togglePlayPause} />
    </ButtonGroup>
  );
};
Controls.propTypes = {
  playing: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  playingState: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
  togglePlayingState: PropTypes.func.isRequired,
  skipToNext: PropTypes.func.isRequired,
  skipToPrevious: PropTypes.func.isRequired,
  record: PropTypes.bool.isRequired,
};

export default Controls;

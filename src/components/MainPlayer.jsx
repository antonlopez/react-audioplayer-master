import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';
import Controls from './Controls';
import Time from './Time';
import style from '../styles/audioElements.css';
import RecordBtn from './buttons/RecordBtn';
import ButtonGroup from './ButtonGroup';
import * as Buttons from './buttons/index';

class MainPlayer extends React.Component {
  static propTypes = {
    markers: PropTypes.object,
    showMarkers: PropTypes.bool,
    src: PropTypes.string,
    updateTime: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = { progressTime: 0, waveTime: 0, durationTime: 0, playState: false
    };
    this.updateProgressTime = this.updateProgressTime.bind(this);
    this.updateTimeWave = this.updateTimeWave.bind(this);
    this.durationTime = this.durationTime.bind(this);
    this.changeButton = this.changeButton.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ progressTime: newProps.timelineStates.progress });
  }
  updateProgressTime(progressTime) {
    this.setState({ progressTime });
  }
  updateTimeWave(waveTime) {
    this.setState({ waveTime });
  }
  durationTime(durationTime) {
    this.setState({ durationTime });
  }
  changeButton() {
    this.setState({ playState: !this.state.playState });
  }
  render() {
    const {
      src,
      showMarkers,
      markers,
      width,
      name,
      comment,
      volumeOrientationDown,
      className,
      onCommentSubmit,
      controlStates,
      controlCallbacks,
      timelineStates,
      timelineCallbacks,
      buttonRecord
    } = this.props;
    const classNameCollection = `${style.mainPlayer} ${className}`.trim();
    let PlayPauseBtn = Buttons.PlayBtn;
    if (this.state.playState){
      PlayPauseBtn = Buttons.PauseBtn;
    }
    return (
      <div className={classNameCollection}>
        <div className={style.btnStack}>
          <ButtonGroup>
            <PlayPauseBtn onClick={this.changeButton} />
          </ButtonGroup>
          <Timeline
            updateDurationTime={this.durationTime}
            updateTime={this.updateTimeWave}
            src={src}
            showMarkers={showMarkers}
            markers={markers}
            appWidth={width - 250}
            updateProgressTime={this.updateProgressTime}
            {...timelineStates}
            {...timelineCallbacks}
          />

          {this.props.mic ? <RecordBtn onClick={this.props.buttonRecord} /> : ''}

          <div className={style.timeNameContainer} style={{ color: this.context.color }}>
            <div className={style.nameContainer} title={name}>{name}</div>
            <div className={style.timeContainer}>
              <Time time={this.state.waveTime} />
              <span>{'/'}</span>
              <Time time={this.state.durationTime} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MainPlayer.propTypes = {
  className: PropTypes.string,
  buttonRecord: PropTypes.func
};
MainPlayer.defaultProps = {
  className: '',
  buttonRecord: PropTypes.func
};
MainPlayer.contextTypes = {
  color: PropTypes.string
};

export default MainPlayer;

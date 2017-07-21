import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';
import Controls from './Controls';
import Time from './Time';
import style from '../styles/audioElements.css';
import RecordBtn from './buttons/RecordBtn';

class MainPlayer extends React.Component {
  static propTypes = {
    markers: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = { progressTime: 0 };
    this.updateProgressTime = this.updateProgressTime.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ progressTime: newProps.timelineStates.progress });
  }
  updateProgressTime(progressTime) {
    this.setState({ progressTime });
  }
  render() {
    const {
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
    return (
      <div className={classNameCollection}>
        <div className={style.btnStack}>
          <Controls
            volumeOrientationDown={volumeOrientationDown}
            {...controlStates}
            {...controlCallbacks}
          />
          <Timeline
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
              <Time time={this.state.progressTime} />
              <span>{'/'}</span>
              <Time time={timelineStates.duration} />
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

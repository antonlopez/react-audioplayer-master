import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import ProgressBarHandler from './ProgressBarHandler';
import style from '../styles/audioElements.css';
import Marker from './Marker';
import WaveForm from './Waveform';


class Timeline extends React.Component {
  static propTypes = {
    appWidth: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    playAudio: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      showHandler: false,
      barWidth: (props.appWidth < 300) ? 300 : props.appWidth,
      translate: 0,
    };
    this.holding = false;
    this.shouldTogglePlayPause = this.props.playing;
    this.changeTranslate = this.changeTranslate.bind(this);
    this.receiveTime = this.receiveTime.bind(this);
    this.durationTime = this.durationTime.bind(this);
    this._onMouseDownProgressBar = this._onMouseDownProgressBar.bind(this);
    this._onMouseOverProgressBar = this._onMouseOverProgressBar.bind(this);
    this._onMouseOutProgressBar = this._onMouseOutProgressBar.bind(this);
    this._onMouseDownProgressBarHandler = this._onMouseDownProgressBarHandler.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this.finishedPlaying = this.finishedPlaying.bind(this);

    this.onMouseMoveFunctionRef = null;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== 0 && !this.holding) {
      const lengthPerSecond = this.state.barWidth / nextProps.duration;
      const length = nextProps.progress * lengthPerSecond;
      this.changeTranslate(length);
      this.shouldTogglePlayPause = nextProps.playing;
    }
  }
  _onMouseOverProgressBar() {
    this.setState({ showHandler: true });
  }
  _onMouseOutProgressBar() {
    this.setState({ showHandler: false });
  }
  _onMouseDownProgressBar(e) {
    e.stopPropagation();
    // console.log('Timeline: _onMouseDownProgressBar');
    if (this.shouldTogglePlayPause) { this.props.togglePlayPause(); }
    const timelineDisToLeft = e.target.parentNode.getBoundingClientRect().left;
    const newTranslate = e.pageX - timelineDisToLeft;
    this.changeTranslate(newTranslate);
    this.holding = true;
    this.onMouseMoveFunctionRef = this._onMouseMove(e.pageX, newTranslate);
    document.addEventListener('mousemove', this.onMouseMoveFunctionRef);
    document.addEventListener('mouseup', this._onMouseUp);
  }
  _onMouseDownProgressBarHandler(e) {
    e.stopPropagation();
    this.holding = true;
    // console.log('Timeline: _onMouseDownProgressBarHandler');
    if (this.shouldTogglePlayPause) { this.props.togglePlayPause(); }
    this.onMouseMoveFunctionRef = this._onMouseMove(e.pageX, this.state.translate);
    document.addEventListener('mousemove', this.onMouseMoveFunctionRef);
    document.addEventListener('mouseup', this._onMouseUp);
  }
  _onMouseMove(mouseDownX, startTranslate) {
    return (event) => {
      if (this.holding) {
        const translate = (event.pageX - mouseDownX) + startTranslate;
        this.changeTranslate(translate);
        this.props.updateProgressTime((this.state.translate / this.state.barWidth) * this.props.duration);
      }
    };
  }
  _onMouseUp() {
    // console.log('Timeline: _onMouseUp()');
    /* When the _onMouseUp() event happen really quick after the _onMouseDownProgressBar(),
       i.e. React hasn't called setState, enqueue a togglePlayPause() to the loop. */
    if (this.shouldTogglePlayPause && this.props.playing) { setTimeout(() => this.props.togglePlayPause(), 0); }
    // Normally, when this.shouldTogglePlayPause is true, this.props.playing should be false, except the case above.
    if (this.shouldTogglePlayPause && !this.props.playing) { this.props.togglePlayPause(); }

    this.holding = false;
    this.props.setProgress((this.state.translate / this.state.barWidth) * this.props.duration);

    document.removeEventListener('mousemove', this.onMouseMoveFunctionRef);
    document.removeEventListener('mouseup', this._onMouseUp);
  }
  changeTranslate(newTranslate) {
    let translate = newTranslate;
    const max = this.state.barWidth;
    if (translate < 0) { translate = 0; }
    if (translate > max) { translate = max; }
    this.setState({ translate });
  }
  receiveTime(time) {
    this.props.updateTime(time);
  }
  durationTime(time) {
    this.props.updateDurationTime(time);
  }
  finishedPlaying(state){
    this.props.finishedPlaying(state);
    }
  callMarker() {
    const markerArray = [];
    // console.log('Timeline props', this.props.markers);
    // console.log('local props', markerObj.markers);
    const receivedMarkerObject = this.props.markers;

    for (const key in receivedMarkerObject) {
        // normalization position = (time/duration)* barwidth
      const position = ((receivedMarkerObject[key] / 44100) / (this.props.duration)) * this.state.barWidth;
      markerArray.push(<Marker
        style={{ overflow: 'visible' }}
        visibility={true}
        translate={`translate(${position})`}
        text={key}
      />);
    }

    return (
        markerArray
    );
  }
  render() {
    const handlerWidth = 12;
    const handlerHeight = 12;           //
    const containerWidth = this.state.barWidth;
    const containerHeight = 100;
    const barHeight = 4;
    const handlerHeight2 = 112;           //
    const containerWidth2 = this.state.barWidth;
    const containerHeight2 = 10;
    const overflow = 'visible';
    return (
      <div style={{ overflow: 'visible' }} >
        <div style={{ height: containerHeight2, width: containerWidth2, transform: 'translateY(2px)', overflow: 'visible' }}>
          <ProgressBar
            overflow={overflow}
            width={containerWidth2}
            height={handlerHeight2}
            barHeight={0}
            handlerWidth={handlerWidth}
            translate={this.state.translate}
            duration={this.props.duration}
            onMouseDown={this._onMouseDownProgressBar}
            onMouseOver={this._onMouseOverProgressBar}
            onMouseOut={this._onMouseOutProgressBar}
          >
            {this.props.showMarkers ? this.callMarker() : ''}
          </ProgressBar>
        </div>
        <div className={style.timeLine} style={{ height: containerHeight, width: containerWidth, transform: 'translateY(-4px)' }}>
          <WaveForm
            src={this.props.src}
            pos={this.receiveTime}
            durationTime={this.durationTime}
            playAudio={this.props.playAudio}
            finishedPlaying={this.finishedPlaying}
          />
        </div>
      </div>
    );
  }
}

export default Timeline;

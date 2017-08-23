import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';


class WaveForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.duration = this.duration.bind(this);
    this.finishedPlaying = this.finishedPlaying.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
    const duration = e.wavesurfer.getDuration();
    this.props.pos(this.state.pos);
  }
  duration(e) {
    this.props.durationTime(e.wavesurfer.getDuration());
  }
  finishedPlaying() {
    this.props.finishedPlaying(true);

  }
  render() {
    return (
      <div style={{ width: this.props.width, marginLeft: '', cursor: 'pointer' }}>
        <Wavesurfer
          audioFile={this.props.src}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.props.playAudio}
          options={{ cursorWidth: 4, progressColor: '#3791D5', cursorColor: '#3791D5', barWidth: 0.2, hideScrollbar: true, normalize: true, height: 100, waveColor: '#FFF' }}
          onReady={this.duration}
          onFinish={this.finishedPlaying}
        />
      </div>
    );
  }
}


export default WaveForm;

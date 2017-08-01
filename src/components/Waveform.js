import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';


class WaveForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: this.props.playAudio,
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
  playingState() {
    this.setState({ playing: this.props.playAudio });
    return this.state.playing;
  }

  render() {
    const playing = this.state.playing;
    return (
      <div style={{ width: '950px', marginLeft: '', cursor: 'pointer' }}>
        <Wavesurfer
          audioFile={this.props.src}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.props.playAudio}
          options={{ barWidth: 0.5, height: 80, waveColor: '#FFF' }}
          onReady={this.duration}
          onFinish={this.finishedPlaying}
        />
      </div>
    );
  }
}


export default WaveForm;

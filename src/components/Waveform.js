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
  render() {
    return (
      <div style={{ width: '550px' }}>
        <Wavesurfer
          audioFile={this.props.src}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          options={{ barWidth: 0.1, height: 30 }}
          onReady={this.duration}
        />
      </div>
    );
  }
}


export default WaveForm;

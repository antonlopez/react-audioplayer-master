import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';


class WaveForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
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
  }
  render() {
    return (
      <div style={{ width: '550px', marginLeft: '100px' }}>
        <Wavesurfer
          audioFile={'https://files.freemusicarchive.org/music%2Fno_curator%2FThe_Womb%2FBang_-_An_Introduction_to_The_Womb%2FThe_Womb_-_02_-_Sex_Club.mp3'}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          options={{ barWidth: 0.1, waveColor:	'#F5A623', height: 50 }}
        />
      </div>
    );
  }
}


export default WaveForm;

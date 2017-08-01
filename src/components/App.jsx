import React from 'react';
import ReactDOM from 'react-dom';
import Audio from './Audio';
import playlist from '../songs/playlist.json';
import marker from '../songs/markers.json';


// const App = () => (
//   <Audio
//     width={600}
//     height={300}
//     fullPlayer={true}
//     comment={true}
//     onCommentSubmit={(text) => {
//       alert(text);
//     }}
//     color="#212121"
//     recordButton2={true}
//     playlist={playlist.playlist}
//     style={{
//       boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
//       width: '800px',
//       height: '400px'
//     }}
//   />
// );

class App extends React.Component {
  someMethod() {
    // some code ...
    ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
  }

  constructor() {
    super()
    
    this.state = {
      containerWidth: window.innerWidth - 250,
    };
    
    this._handleWindowResize = this._handleWindowResize.bind(this)
    this._isMounted = false;
  }

  get isMounted() {
    return this._isMounted;
  }
  set isMounted(val) {
    this._isMounted = val;
  }

  componentDidMount () {
		this.isMounted = true;
    window.addEventListener('resize', this._handleWindowResize);
	}

	componentWillUnmount () {
		this.isMounted = false;
    window.removeEventListener('resize', this._handleWindowResize);
  }
  
  _handleWindowResize () {
		if (this.isMounted) {
      this.setState({
        containerWidth: window.innerWidth - 250
      });
    }
	}

  render() {
    return (
      <div>
        <Audio
          width={this.state.containerWidth}
          //height={''}
          fullPlayer={false}
          comment={true}
          color="#fff"
          src="http://172.19.145.91/media/dump/1501176679.73d99dfff8-5117-4635-b734-65140995db67/mrk/07/chapter.wav"
          markers={marker.markers}
          markersButton={true}
          playlist={playlist.playlist}
          style={{
            boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
            width: this.state.containerWidth,
            height: '150px',
            marginTop: '200px',
            backgroundColor:'black'
          }}

        // store a reference of the audio component
          ref={(audioComponent) => { this.audioComponent = audioComponent; }}
        />
      </div>
    );
  }
}

export default App;

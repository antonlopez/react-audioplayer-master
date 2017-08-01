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
  render() {
    return (
      <div>
        <Audio
          width={''}
          height={''}
          fullPlayer={false}
          comment={true}
          color="#fff"
          src="https://files.freemusicarchive.org/music%2Fno_curator%2FThe_Womb%2FBang_-_An_Introduction_to_The_Womb%2FThe_Womb_-_02_-_Sex_Club.mp3"
          markers={marker.markers}
          markersButton={true}
          playlist={playlist.playlist}
          loop={false}
          style={{
            boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
            width: '1200px',
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

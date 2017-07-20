import React from 'react';
import PropTypes from 'prop-types';
import markerObj from '../songs/markers.json';
import Marker from './Marker';

const iterator = 0;
class MarkersContainer extends React.Component {


  constructor(props) {
    super(props);


    const totalTime = 130;             // get the time from Time.jsx
    const verse = [];
    const seconds = [];
    const markerArray = [];

    const marker = Object.keys(markerObj.markers);   // get the first column of JSON data
    const lenght = marker.length;


    let i = 0;
    const j = 0;

    for (const key in markerObj.markers) {
      verse[i] = key;

      seconds[i] = parseInt(markerObj.markers[key] / 44100);

      i++;
    }


    for (let i = 0; i < totalTime; i++) {                               // comparator between marker time in JSON and the total time of the audio
      for (let j = 0; j < lenght; j++) {
        if (seconds[j] === i) {
          markerArray.push(<Marker
            visibility={true}
            translate={`translate(${i})`}
          />);
        }
      }
    }


    // this.state = { equalAt };
    this.state = { markerArray,
      availableInfo: false };

    this.createItems = this.createItems.bind(this);
  }


  // createItems() {
  //   return (<Marker
  //     visibility={true}
  //     translate={`translate(${150})`}
  //   />);
  // }


  createItems() {
    const rendert = this.state.markerArray;
    console.log(rendert);

    return (

      <Marker
        translate={`translate(${400})`}
      />


    );
  }


  render() {
    return (

      this.createItems()

    );
  }
}

export default MarkersContainer;


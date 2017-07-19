import React from 'react';
import PropTypes from 'prop-types';
import markers from '../songs/markers.json';
import Marker from './Markers';

const iterator = 0;
class MarkersContainer extends React.Component {


  constructor(props) {
    super(props);


    const totalTime = 130;             // get the time from Time.jsx
    const verse = [];
    const seconds = [];
    const equalAt = [];
    const markerArray = [];

    const marker = Object.keys(markers.markers);   // get the first column of JSON data
    const lenght = marker.length;


    let i = 0;
    const j = 0;

    for (const key in markers.markers) {
      verse[i] = key;

      seconds[i] = parseInt(markers.markers[key] / 44100);

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

    this.createItem = this.createItem.bind(this);
  }


  createItem() {
    return (<Marker
      visibility={true}
      translate={`translate(${460})`}
    />);
  }


  render() {
    const test = this.createItem();
    const rendert = this.state.markerArray;
    console.log(rendert);


    return (

      <Marker
        visibility={true}
        translate={`translate(${460})`}
      />

    );
  }
}

export default MarkersContainer;


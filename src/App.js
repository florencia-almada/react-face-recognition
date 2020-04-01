import React from 'react';
import {Component} from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '3f534a5db26e41949953d813c6317833'
 });

const particlesOptions = {
  polygon: {
    enable: true,
    type: 'inside',
    move: {
        radius: 10
    },
    url: 'path/to/svg.svg'
  }
}

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
              this.state.input)
      .then(
              function(response) {
                console.log(response);
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
              },
              function(err) {
                console.log('there was an error!')
              }
            );
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
          params={{particlesOptions}} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}  
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

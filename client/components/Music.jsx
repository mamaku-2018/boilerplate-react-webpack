import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


class Music extends React.Component {
  setState = {
      isLoaded: false
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.song !== this.props.song) {
          this.setState({
              isLoaded: false
          });
      }
  }

  playSong = () => {
      this.setState({
          isLoaded: true,
      })
  }

  render() {
      const { song } = this.props;
      const { isLoaded } = this.state;

      return (
          <div>
              { isLoaded ? 'Playing' : 'Loading' }
              <audio
                  preload="auto"
                  src={require(`../public/songs/${song}.mp3`)}
                  loop="true"
                  autoPlay={false}
                  onLoadedData={() => this.playSong()}
              />
          </div>
      );

      export default Music
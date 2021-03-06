import React from 'react'

class Rules extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false
    }
    this.playSong = this.playSong.bind(this)
  }

  playSong () {
    this.setState({
      isLoaded: !this.state.isLoaded
    })
  }

  render () {
    return (
      <div>
        <div className='rules'>
          <h1 className='darules'>No rules ... create our own rules</h1>
          <img src='../images/majorgif.gif' id='majorgif' type='img' onClick={this.playSong}/>
          <ul className='spaceout'>
            <ol>  <strong>#1 </strong>  Do the opposite always, choose to deal with the consequences.</ol>
            <ol>  <strong>#2 </strong>  Question, everything including the purpose of a rule.</ol>
            <ol>  <strong>#3 </strong>  Don't listen to the rule bashers. Ignore, can't, don't, shouldn't and must-not.</ol>
            <ol>  <strong>#4 </strong>  Eat your veggies, or don't eat meat.</ol>
            <ol>  <strong>#4 </strong>  Rules are open to interpretation more like a loose guide.</ol>
            <ol>  <strong>#5 </strong>  Rules are not the only way to accompilsh something.</ol>
            <ol>  <strong>#6 </strong>  Believe it or not, "honesty" is disobidence.</ol>
            <ol>  <strong>#7 </strong>  Rules are not static — they evolve. But that evolution is driven by rule breakers.</ol>
            <ol>  <strong>#8 </strong>  Rules aren’t facts. They’re not laws. They’re theories</ol>
            <ol>  <strong>#9 </strong>  Eat your veggies, clean up after yourself and do your dishes.</ol>
            <ol>  <strong>#10 </strong> The golden rule. Break all the god damn rules.</ol>
          </ul>
        </div>
        {this.state.isLoaded && <audio
          preload='auto'
          src='/audio/music.mp3'
          loop='true'
          autoPlay='true'
        />}
      </div>
    )
  }
}

export default Rules

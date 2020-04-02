// Code ClickityClick Component Here
import React, {Component} from 'react'

export default class ClickityClick extends Component { 
    constructor(){
      super()
      this.state = {
        hasBeenClicked: false
      }
    }
    
    handleClick = () =>  {
      this.setState(previousState => {
        return toggled: !previousState.toggled
      })
    }
    render() {
      return (
        <div>
          <p>I have {this.state.hasBeenClicked ? "ON" : 'OFF'}</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
        );
      }
}
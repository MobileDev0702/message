import React, { Component } from 'react'
import Messenger from './components/Messenger'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'container'}>
          {<Messenger />
          }
        </div>
      </div>
    )
  }
}
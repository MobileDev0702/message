import React, { Component } from 'react'
import io from 'socket.io-client'
import './App.css'
import Home from './Home'
const API_URL = 'http://127.0.0.1:8080' //'http://mobiledev0702.github.io/message'
const socket = io(API_URL)

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      user: {},
      disabled: ''
    }
    this.popup = null  
    localStorage.setItem('isSigned', false)
  }

  componentDidMount() {
    socket.on('user', user => {
      this.popup.close()
      this.setState({user})
    })
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: ''})
      }
    }, 1000)
  }

  openPopup() {
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)
    
    const url = `${API_URL}/twitter?socketId=${socket.id}`

    return window.open(url, '',       
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  startAuth() {
    if (!this.state.disabled) {  
      this.popup = this.openPopup()  
      this.checkPopup()
      this.setState({disabled: 'disabled'})
    }
  }

  closeCard() {
    this.setState({user: {}})
  }

  render() {
    const { name } = this.state.user
    // const { name, photo } = this.state.user
    // const { disabled } = this.state
    
    
    name?localStorage.setItem("isSigned", true):localStorage.setItem('isSigned', false);
    

    return (
      <div className={'container'}>
        {/* If there is a user, show the user */}
        {/* Otherwise show the login button */}
        {name
        // localStorage.getItem('isSigned')
          // ? <div className={'card'}>              
          //     <img src={photo} alt={name} />
          //     <FontAwesome
          //       name={'times-circle'}
          //       className={'close'}
          //       onClick={this.closeCard.bind(this)}
          //     />
          //     <h4>{`@${name}`}</h4>
          //   </div> 
          ? <Home user= {this.state.user}/>
          : <div className='container' style={{paddingTop:'100px'}}>
              <div className='row'>
                <div className='col-6' align='center'>
                <i className="fa fa-twitter"
                  onClick={this.startAuth.bind(this)} 
                  style={{borderRadius: '50%', fontSize:'100px',padding:'10%', backgroundColor:'#1da1f2', color:'white'}}>
                </i>
                </div>
                <div className='col-6' align='center'>
                  <i className="fa fa-twitter"
                    onClick={this.startAuth.bind(this)} 
                    style={{borderRadius: '50%', fontSize:'100px',padding:'10%', backgroundColor:'#1da1f2', color:'white'}}>
                  </i>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}
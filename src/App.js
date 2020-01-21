import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h1><i className="material-icons">home	</i> OutReach Assistant</h1>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><h4>John Smith</h4></a>
                </li>
              </ul>
            </div>
          </div>
      
        </nav>
        <div className="container">
          <div className="card card-primary">
            <div className="card-header">
            
              <i className="material-icons" style={{float:'right'}}>fullscreen_exit	</i>
              <h2><i className="material-icons">library_books	</i> Campaigns</h2>
            </div>
            <div className="card-body" style={{backgroundColor:'gray'}}>
              <div className="container" style={{backgroundColor:'#dcdcdc'}}>
                <div className="row">
                  <div className="col-xl-3"></div>
                  <div className="col-xl-6">
                    <h1>Build a Campaign Message</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-xl-4">
                      <div className="row">
                        <div className="col-6">
                          <div className='directory'>
                            This is text1.
                          </div>
                        </div>
                        <div className="col-6">
                          <div className='directory'>
                            This is text2.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className='directory'>
                            This is text3.
                          </div>
                        </div>
                        <div className="col-6">
                          <div className='directory'>
                            This is text4.
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col col-8">
                    <div className="mPanel">
                      <input className="form-control" type="text" placeholder="Subject"/>
                      <input className="form-control" type="text" placeholder="Recipients"/>
                      <div style={{height:'400px', padding:'2%'}}>
                        +
                      </div>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <button className="btn btn-primary bSend" onClick={this.onToggleCode}>Send</button>
                        </div>
                          
                        <div className='col-sm-9'>
                          <div className='row' style={{float:'right'}}>Word Count: 9999</div><br/>
                          <div className='row' style={{float:'right'}}>Points of Personalization: 9999</div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
              />
            </div>
          </div>
          
          
        </div>
      </div>
      
      
    );
  }
}

export default App;

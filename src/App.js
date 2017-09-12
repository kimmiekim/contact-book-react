import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state= {
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts)=> {
      this.setState({contacts : contacts})
      // {console.log(JSON.stringify(contacts))}
    })
  }

  render() {
    return (
      <div className="App">
        <ListContacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;

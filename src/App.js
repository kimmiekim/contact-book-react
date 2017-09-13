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
    })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter(c => c.id != contact.id)
    }))

    // ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div className="App">
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;

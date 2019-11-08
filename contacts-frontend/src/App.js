import React, { Component } from 'react';
import './App.css';
import * as ContactsAPI from './utils/ContactsAPI';
import ContactList from "./components/contact-list/contact-list-component";




class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(e => e.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ContactList onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    );
  }
}



export default App;

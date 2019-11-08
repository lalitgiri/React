import React, { Component } from 'react';
import './App.css';
import * as ContactsAPI from './utils/ContactsAPI';
import ContactList from "./components/contact-list/contact-list-component";
import CreateContact from './components/create-contact/create-contact'
import { Route } from 'react-router-dom';


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
    }));
    ContactsAPI.remove(contact);
  }

  render() {
    return (
      <div>
        <Route path="/" exact render={() => (
          <ContactList onDeleteContact={this.removeContact} contacts={this.state.contacts} />
        )} />
        <Route path="/create" component={CreateContact} />

      </div>
    );
  }
}



export default App;

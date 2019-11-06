import React, { Component } from 'react';
import './App.css';

import ContactList from "./components/contact-list/contact-list-component";

const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@abc.com",
    "avatarURL": "http://localhost:5001/Avatar_1.png"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@abc.com",
    "avatarURL": "http://localhost:5001/Avatar_2.png"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@abc.com",
    "avatarURL": "http://localhost:5001/Avatar_3.jpg"
  }
]


class App extends Component {


  render() {
    return (
      <div>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}



export default App;

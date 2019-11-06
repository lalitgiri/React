import React, { Component } from 'react';
import './App.css';

import ContactList from "./components/contact-list/contact-list-component";


class App extends Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">

          <ContactList people={
            [
              { name: "Lalit" },
              { name: "Kapil" },
              { name: "Balram" }
            ]
          } />

          <ContactList people={
            [
              { name: "Harshit" },
              { name: "Kushank" },
              { name: "Tushar" }
            ]
          } />

        </header>
      </div>
    );
  }
}



export default App;

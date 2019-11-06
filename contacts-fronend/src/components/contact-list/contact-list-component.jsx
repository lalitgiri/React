import React, { Component } from 'react';
import './contact-list-component.css';

class ContactList extends Component {

    
    render() {
        const contacts =  this.props.contacts;

        return <ol className = 'contact-list'>
            {contacts.map(person => (
                <li key={person.name}>{person.name} </li>
            ))}
        </ol>;
    }
}


export default ContactList;

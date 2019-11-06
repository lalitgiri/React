import React, { Component } from 'react';
import './contact-list-component.css';

class ContactList extends Component {

    
    render() {
        const people =  this.props.people;

        return <ol className = 'text-color'>
            {people.map(person => (
                <li key={person.name}>{person.name} </li>
            ))}
        </ol>;
    }
}


export default ContactList;

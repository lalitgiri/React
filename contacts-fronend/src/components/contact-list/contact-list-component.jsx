import React, { Component } from 'react';
import './contact-list-component.css';

// functional components ... functional components are stateless...
/*
function ContactList(props) {
    const contacts = props.contacts;

    return <ol className='contact-list'>
        {contacts.map(contact => (
            <li key={contact.id} className='contact-list-item'>

                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }} />
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'>Remove</button>
            </li>
        ))}
    </ol>;

}
*/
// controlled components

class ContactList extends Component {


    render() {
        const contacts = this.props.contacts;

        return <ol className='contact-list'>
            {contacts.map(contact => (
                <li key={contact.id} className='contact-list-item'>

                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }} />
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <button onClick={() => { this.props.onDeleteContact(contact) }} className='contact-remove'>Remove</button>
                </li>
            ))}
        </ol>;
    }
}


export default ContactList;

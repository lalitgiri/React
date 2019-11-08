import React, { Component } from 'react';
import './contact-list-component.css';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    render() {
        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;

        let showingContacts;

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');

            showingContacts = contacts.filter((contact) => {
                return match.test(contact.name);
            });
        } else {
            showingContacts = contacts;
        }

        showingContacts.sort(sortBy('name'));
        return <div className="list-contacts">
            {JSON.stringify(this.state)}
            <div className="list-contacts-top">
                <input
                    className="search-contacts"
                    type="text"
                    placeholder="Search Contacts"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)} />
            </div>
            <ol className='contact-list'>
                {showingContacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>

                        <div className='contact-avatar' style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={() => { onDeleteContact(contact) }} className='contact-remove'>Remove</button>
                    </li>
                ))}
            </ol>
        </div>;
    }
}


export default ContactList;

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
                <button  onClick={() => {props.onDeleteContact(contact) }}  className='contact-remove'>Remove</button>
            </li>
        ))}
    </ol>;

}
*/
import { Component } from 'react';
import { Contact } from 'components/Contact/Contact';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        <Contact
          contacts={this.props.contacts}
          deleteContact={this.props.deleteContact}
        />
      </ul>
    );
  }
}

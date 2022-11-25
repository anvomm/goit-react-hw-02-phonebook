import { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}

/* export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}; */

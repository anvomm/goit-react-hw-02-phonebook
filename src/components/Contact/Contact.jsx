import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactButton, ListItem } from './Contact.styled';

export class Contact extends Component {
  render() {
    return this.props.contacts.map(({ name, id, number }) => (
      <ListItem key={id}>
        {name}: {number}
        <ContactButton
          type="button"
          onClick={() => {
            this.props.deleteContact(id);
          }}
        >
          Delete
        </ContactButton>
      </ListItem>
    ));
  }
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};

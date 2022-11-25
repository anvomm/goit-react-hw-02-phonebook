import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  render() {
    return this.props.contacts.map(({ name, id, number }) => (
      <li key={id}>
        {name}: {number}
        <button
          type="button"
          onClick={() => {
            this.props.deleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
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

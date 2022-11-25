import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  render() {
    return this.props.contacts.map(({ name, id, number }) => (
      <li key={id}>
        {name}: {number}
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
};

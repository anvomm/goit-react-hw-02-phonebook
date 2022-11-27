import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <List>
        <Contact
          contacts={this.props.contacts}
          deleteContact={this.props.deleteContact}
        />
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

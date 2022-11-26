import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List, Text } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.length !== 0 ? (
          <Contact
            contacts={this.props.contacts}
            deleteContact={this.props.deleteContact}
          />
        ) : (
          <Text>Unfortunately your contacts list is empty</Text>
        )}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

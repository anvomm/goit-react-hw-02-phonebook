import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List, Text, Span } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.length === 0 && this.props.filter === '' ? (
          <Text>Unfortunately your contacts list is empty</Text>
        ) : this.props.contacts.length === 0 && this.props.filter !== '' ? (
          <Text>
            Your list does not contain the contact named
            <Span> {this.props.filter}</Span>
          </Text>
        ) : (
          <Contact
            contacts={this.props.contacts}
            deleteContact={this.props.deleteContact}
          />
        )}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

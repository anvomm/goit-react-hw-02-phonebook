import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  inputHandler = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputHandler}
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

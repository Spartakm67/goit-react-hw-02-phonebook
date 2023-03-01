// import { Form } from 'formik';
import { Component } from 'react';
import { Container } from "./App.styled"; 


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  addContact = newContact => {
    const arrayOfContactsName = [];

    for (const contact of this.state.contacts) {
      arrayOfContactsName.push(contact.name);
    }
    console.log(this.state.contacts);
  }  

  
  render() {
    return (
      <Container>
        
          <h1>Phonebook</h1>
        <h2>Contacts</h2>
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
        />
          <button type="submit" onSubmit={this.addContact} >Add contact</button> 
           
    </Container>);
  }
  
}

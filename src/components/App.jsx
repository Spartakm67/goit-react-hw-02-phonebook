// import { Form } from 'formik';

import { Component } from 'react';
import { Container } from "./App.styled"; 
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    id: '',
    newContact: ''
  }

  

  handleInputChange = e => {
    
    const { value } = e.currentTarget;
       
    this.setState({ newContact: value });
    console.log(this.state.newContact);
   
  }  


handleSubmit = e => {
e.preventDefault();

this.props.onSubmit(this.state.newContact);
// this.setState({newContact: ''});
  }


  addContact = item => {
    return item;    
  };

     

  render() {
    return (
      <Container>
        
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
        <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.value}
            onChange={this.handleInputChange}
        />
            <button type="submit">Add contact</button> 
          </label>
        </form>
        <ul>
          <li>{this.addContact()}</li>
        </ul>
        <ContactsForm onSubmit={this.addContact}/>
        
    </Container>);
  }
  
}

// import { Form } from 'formik';

import { Component } from 'react';
import { Container } from "./App.styled"; 
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    id: ''
  }

  

  handleInputChange = e => {
    // const arrayOfContactsName = [];
    const { value } = e.currentTarget;
    // for (const contact of this.state.contacts) {
    //   arrayOfContactsName.push(contact.name);
    // }
    
    this.setState({ name: value, contacts:  value });
    console.log(value);
   
  //   <ul>
  //      <li key={item.id} style={{ paddingBottom: '10px' }}>
  //         <span style={{ width: '220px' }}>
  //           {' '}
  //           {item.name} : {item.number}{' '}
  //       </span>
  //       </li>
  //     ))}
  //   </ul>
  // );
  }  

  addContact = e => {
    // e.preventDefault();
    console.log(this.state);
    const { name } = this.state;
    
    return name;
  };

     

  render() {
    return (
      <Container>
        
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <form onSubmit={this.addContact}>
          <label>
        <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
        />
            <button type="submit">Add contact</button> 
          </label>
        </form>
        <ul>
          <li>{this.addContact()}</li>
        </ul>
        <ContactsForm item={this.addContact()}/>
        
    </Container>);
  }
  
}

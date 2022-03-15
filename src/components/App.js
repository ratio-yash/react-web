import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      "id":1,
      "name":"yash",
      "email":"yash@yopmail.com"
    },
    {
      "id":2,
      "name":"Jyoti",
      "email":"jyoti@yopmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;

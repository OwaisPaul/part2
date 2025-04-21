import { useState, useEffect } from 'react'
import PersonFilter from './PersonFilter'
import Form from './Form'
import Contacts from './Contacts'
import contacts from '../Services/contacts'
import Notify from './Notify'


const App = () => {
  //initializing the contact list with an array using useState

  const [persons, setPersons] = useState([])
  // using state to save new contacts 
  const [newName, setNewName] = useState('')
  // state for numbers
  const [newNumber, setNewNumber] = useState('')
  // state for searching 
  const [searchItem,setSearchItem] = useState('');
  // state for notification
  const [notification, setNotification] = useState(null)
  // state for success or error for styling 
  const [notificationType, setNotificationType] = useState('success')
// using the useEffect in order to link the component to the external system
 useEffect(() => {
  console.log('effect')
  // fetching the data from the server
  contacts
  .getAll()
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      })
 }, [])
// handler for adding the contact to the list
  const addContact = (event)=> {
    event.preventDefault();  
      const newContact = {
        name: newName,
        number: newNumber,
      }
      console.log(newContact);
     
      // Check if the name already exists in the phonebook
      // handle it with the axios and post methods
    const nameExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    // in order to replace the old number of a contact 

    if (nameExists) {
     const confirmUpdate = window.confirm(`${newName} is already in the phonebook, replace the old number with a new one ?`)
      if(confirmUpdate){
        const updatedContact = {...nameExists, number: newNumber};
      
      contacts
      .update(nameExists.id,updatedContact)
      .then(response => {
        setPersons(persons.map(person=> person.id !== nameExists.id ? person : response.data))
        setNotification(`Updated ${updatedContact.name}`)
        setNotificationType('success')
        setTimeout(() => {
          setNotification(null)
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          setNotification(`Information of ${updatedContact.name} has already been removed from server`)
          setNotificationType('error')
          setTimeout(() => {
            setNotification(null)
            }, 5000)
        })
          setNewName('')
          setNewNumber('')
        
      }
    } else {
      
       contacts
       .create(newContact)
       .then(response => {
         console.log(response.data)
         setPersons(persons.concat(response.data))
         setNewName('')
         setNewNumber('')
         setNotification(`Added ${newContact.name}`)
         setNotificationType('success')
         setTimeout(() => {
          setNotification(null)
         }, 5000)
         })
         .catch(error => {
          console.log(error)
          setNotification(`Failed to add ${newContact.name}`)
          setNotificationType('error')
          setTimeout(() => {
            setNotification(null)
            }, 5000)
         })
         console.log(newContact);
     console.log(persons);
     
     
  }      

  }
    // deleting a number
  const deleteOne = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      contacts
      .deleteContact(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setNotification(`Deleted contact`)
        setNotificationType('success')
        setTimeout(() => {
          setNotification(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          setNotification(`Contact was already removed from the server`)
          setNotificationType('error')
          setTimeout(() => {
            setNotification(null)
            }, 5000)
            })
        }
        }
  // for filtering the search contact and rendering only the searchItem
  const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(searchItem.toLowerCase()))

    

  return (
    <div>
      <h1>Phonebook</h1>
      <Notify message={notification} type={notificationType} />
       <PersonFilter searchItem={searchItem} setSearchItem={setSearchItem} />
      <Form 
      addContact={addContact}
      newName={newName}
      setNewName={setNewName}
      newNumber={newNumber}
      setNewNumber={setNewNumber}s
      />
      <h2>Contacts</h2>
      <Contacts filteredContacts={filteredContacts} deleteOne={deleteOne}/>
      </div>
  )
}

export default App
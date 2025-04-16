
const Contacts = ({filteredContacts, deleteOne}) => {
  return (
    <div>
      {filteredContacts.map(person => 
        <div key={person.name}>{person.name} {person.number}
        <div>
        <button onClick={() => deleteOne(person.id, person.name)}>delete</button>
        </div>
        </div>
      )}
        </div>
    
  )
}

export default Contacts
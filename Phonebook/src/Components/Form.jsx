

const Form = ({
    addContact,
    newName,
    newNumber,
    setNewName,
    setNewNumber    
}) => {
  return (
    <form onSubmit={addContact}>
        <div>
          <h3>Add a new Contact</h3>
          name: <input value={newName} onChange={(e) => {
              const sanitizedValue = e.target.value;
              setNewName(sanitizedValue);
            }}
            required/>
        </div>
        <div>
          number: <input value={newNumber}  onChange={(e) => {
              const sanitizedValue = e.target.value;
              setNewNumber(sanitizedValue);
            }}
            required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Form
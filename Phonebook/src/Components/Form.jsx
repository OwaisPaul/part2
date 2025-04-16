

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
              const sanitizedValue = e.target.value.replace(/[^A-Za-z\s]/g, "");
              setNewName(sanitizedValue);
            }}
            required/>
        </div>
        <div>
          number: <input value={newNumber}  onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
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
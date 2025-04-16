

const PersonFilter = ({searchItem, setSearchItem}) => {
  return (
    <div>
        search for a contact
      <input value={searchItem}  onChange={(event)=> setSearchItem(event.target.value)}/>
        </div> 
  )
}

export default PersonFilter
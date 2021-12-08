import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: "", description: "", tag: ""});

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
  }

  return (
    <div>
      <h2 className="my-3 text-center"><strong>Add new note</strong></h2>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" rows="5" onChange={onChange}></textarea>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleClick}>
            Save Note
          </button>
          <button type="reset" className="btn btn-primary mx-2">
            Clear
          </button>
        </div>
      </form> 
    </div>
  )
}

export default AddNote
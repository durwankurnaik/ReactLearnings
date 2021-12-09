import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title"><strong>{note.title}</strong></h5>
          </div>
          <p className="card-text">{note.description}</p>
          <div>
            <i className="far fa-edit" onClick={() => { updateNote(note) }}></i>
            <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Noteitem

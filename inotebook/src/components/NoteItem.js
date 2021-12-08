import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';


const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const { note } = props;

  return (
    <div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><strong><h4>{note.title}</h4></strong></h5>
            <p className="card-text">{note.description}</p>
          </div>
          <div className="my-2 mx-2">
            <button className="btn text-dark btn-sm btn-outline-secondary"><i className="far fa-edit"></i></button>
            <button className="mx-1 btn  btn-sm btn-outline-danger" onClick={()=>{deleteNote(note._id)}}><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem

import React from 'react'

const NoteItem = (props) => {

  const { note } = props;
  const style = {
    background: "#b6b2b2",
    color: "black",
    height: "200px"
  }

  return (
    <div>
      <div className="col">
        <div className="card" style={style}>
          <div className="card-body">
            <h5 className="card-title"><strong><h4>{note.title}</h4></strong></h5>
            <p className="card-text">{note.description}</p>
          </div>
          <div className="my-2 mx-2">
            <button className="btn text-dark btn-sm btn-outline-secondary">Edit</button>++++++
            <button className="mx-1 btn  btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem

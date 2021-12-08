import React, { useState } from 'react'
import NoteContext from './NoteContext'


const NoteStates = (props) => {
  const host = "http://localhost:5000";

  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjM3YjEwNmFiMjAxZGMyMDk0MjJhIn0sImlhdCI6MTYzODAzMTQ5Nn0.Fx0_zPKuMrAEa3cDK-cX6yFIpSk0pP8c8iUeJxe1XGo"
      }
    })

    const json = await response.json();
    console.log(json);
  }

  const [notes, setNotes] = useState({});

  // Add a note
  const addNote = async (note) => {
    const url = `${host}/api/notes/addnotes`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjM3YjEwNmFiMjAxZGMyMDk0MjJhIn0sImlhdCI6MTYzODAzMTQ5Nn0.Fx0_zPKuMrAEa3cDK-cX6yFIpSk0pP8c8iUeJxe1XGo"
      },
      body: JSON.stringify({ note })
    });
    setNotes(notes.concat(note));
  }

  // Edit a note
  const editNote = async (id, title, tag, description) => {

    // Server side logic
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjM3YjEwNmFiMjAxZGMyMDk0MjJhIn0sImlhdCI6MTYzODAzMTQ5Nn0.Fx0_zPKuMrAEa3cDK-cX6yFIpSk0pP8c8iUeJxe1XGo"
      },
      body: JSON.stringify({ title, tag, description })
    });

    const json = response.json();

    // This is used in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  }

  // Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id }); // Deleting the note that is clicked by the user.
    setNotes(newNotes) // Setting the remaining notes as the final notes to be outputted.
  }

  return (
    <div>
      <NoteContext.Provider value={{ notes, getNo, addNote, editNote, deleteNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteStates

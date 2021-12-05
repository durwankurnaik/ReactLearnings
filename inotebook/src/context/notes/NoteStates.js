import React from 'react'
import NoteContext from './NoteContext'


const NoteStates = (props) => {

    return (
    <div>
        <NoteContext.Provider value={null}>
            {props.children}
        </NoteContext.Provider>
    </div>
)
}

export default NoteStates

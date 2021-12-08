import React, { useState } from 'react'
import NoteContext from './NoteContext'


const NoteStates = (props) => {

    const notesInitial = [
        {
            "_id": "61ab7fd46e64c46f3d62617b",
            "user": "61a237b106ab201dc209422a",
            "title": "Internship updated shitt",
            "description": "Find some nice internship for helping yourself in job interview. Also find some internship with some nice stipend",
            "tag": "TODO",
            "date": "2021-12-04T14:48:52.178Z",
            "__v": 0
        },
        {
            "_id": "61ae14653108a3515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Find a Job",
            "description": "Find a good job otherwise you will be fucked up by watching others",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        },
        {
            "_id": "61ae146534308a3515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Some weird shit to be done over here",
            "description": "Are padhai karlo thoda",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        },
        {
            "_id": "61ae146554108a3515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Find a Job",
            "description": "Find a good job otherwise you will be fucked up by watching others",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        },
        {
            "_id": "61ae146531083515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Some weird shit to be done over here",
            "description": "Are padhai karlo thoda",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        },
        {
            "_id": "61ae1465310561a3515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Find a Job",
            "description": "Find a good job otherwise you will be fucked up by watching others",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        },
        {
            "_id": "61ae14653103515de61cac",
            "user": "61a237b106ab201dc209422a",
            "title": "Some weird shit to be done over here",
            "description": "Are padhai karlo thoda",
            "tag": "TODO",
            "date": "2021-12-06T13:47:17.216Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <div>
            <NoteContext.Provider value={{ notes, setNotes }}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteStates

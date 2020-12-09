import React from 'react'


function Note(props) {
    console.log(props)
    return <li>{props.note}</li>
}

export default Note;
import React from 'react'
import './ChipsBtn.css'
import { useHistory } from 'react-router-dom'


export default function ChipsBtn() {
    const history = useHistory()

    return (
        <button id="chip-list"  onClick={() => history.push("/chips")}>
            Chip Master List
        </button>
    )
}

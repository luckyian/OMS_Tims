import React from 'react'
import './PickListBtn.css'
import { useHistory } from 'react-router-dom'


export default function PickListBtn() {
    const history = useHistory()

    return (
        <button id="pick-list" onClick={() => history.push("/picklist")}>
            Pick List
        </button>
    )
}

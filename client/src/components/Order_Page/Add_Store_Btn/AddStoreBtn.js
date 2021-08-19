import React from 'react'

export default function AddStoreBtn({setCards, cards}) {

    function HandleClick(){
        setCards({
            id: cards.length,
        },...cards)
    }

    return (
        <button onClick={HandleClick}>
            +
        </button>
    )
}

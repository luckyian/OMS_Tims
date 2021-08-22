import React from 'react'

export default function AddChipBtn({setShowChipsModal}) {

    const handleShowChipsModal = () => setShowChipsModal(true);

    return (
        <button id="add-chip"  onClick={handleShowChipsModal}>
            Add Chips
        </button>
    )
}

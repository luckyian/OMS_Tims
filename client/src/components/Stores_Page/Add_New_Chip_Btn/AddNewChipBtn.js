import React from 'react'

export default function AddNewChipBtn({setShowNewChipsModal}) {

    const handleShowNewChipsModal = () => setShowNewChipsModal(true);

    return (
        <button id="add-chip"  onClick={handleShowNewChipsModal}>
            Add New Chips
        </button>
    )
}

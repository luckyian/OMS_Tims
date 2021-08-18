import React from 'react'

import AddChipModal from './Add_Chip_Modal/AddChipModal.js'

export default function AddChipBtn({setShowChipsModal}) {

    const handleShowChipsModal = () => setShowChipsModal(true);

    return (
        <button id="add-chip"  onClick={handleShowChipsModal}>
            Add Chips
        </button>
    )
}

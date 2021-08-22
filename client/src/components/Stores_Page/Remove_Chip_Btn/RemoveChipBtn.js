import React from 'react'

export default function RemoveChipBtn({setShowDeleteModal, selectedStore, setError}) {

    const handleShowDeleteModal = () => {
        if (selectedStore.chips.length > 0) {
            setError('')
            setShowDeleteModal(true);
        } else {
            setError("No chips to Delete")
        }
    }

    return (
        <button id="delete-chip-btn"  onClick={handleShowDeleteModal}>
            Remove Chips
        </button>
    )
}

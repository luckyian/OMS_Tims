import React from 'react'

export default function StoreChipsDisplay({chips}) {
    return (
        <div>
            {chip.map(chip => 
                <div>
                    <p>{chip.name+chip.sku}</p>
                </div>   
            )}
        </div>
    )
}

import React from 'react'

export default function StoreChipsDisplay({chips}) {
  
   
    return (
        <div>
            {chips?.map((chip) => 
                <div>
                    <p>{chips.name+chips.sku}</p>
                </div>   
            )}
        </div>
    )
}

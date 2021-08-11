import React, { useRef, useState } from 'react'

import Local from "../../utils/localStorage"
// import { useAuth } from '../../contexts/AuthContext'
import { Form } from "react-bootstrap"

export default function StoreSelect() {


    // const { currentUser } = useAuth()
    const chipArr = Local.getChipsArr()
    const chipNameRef = useRef()
    console.log(chipArr)



    function handleAddChart() {


        const targetChip = chipArr.filter(chip => chip.name === chipNameRef.current.value)
        console.log(targetChip[0].doses)


    }

    const data = {
        // dates = lables
        labels: dates,
        datasets: [
            {
                // label: [chipNameRef.current.value],
                // put in the blood sugars 
                data: tests,
                fill: false,
                backgroundColor: 'rgb(207, 4, 47)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }



    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control as="select" ref={chipNameRef} onChange={handleAddChart}>
                        {chipArr.map(chip => (<option>{chip.name}</option>))}
                    </Form.Control>
                </Form.Group>
            </Form>
            {activeChart && <Line data={data} options={options} />}
        </div>
    )
}
import React, {useRef} from 'react'
import { Form } from 'react-bootstrap'
import stores from '../../reference/stores.json'
import chips from '../../reference/chips.json'
// import Local from '../../../utils/localStorage'
import Local from '../../utils/localStorage'
export default function ShowChipList() {


    const chipsRef = useRef()
    let allChips = chips
    function Chips(props) {
        // Correct! There is no need to specify the key here:
        return <li>{props.name}</li>;
      }
      
      function ChipsList(props) {
        // const numbers = props.numbers;
        const chipItems = allChips.map((chip) =>
          // Correct! Key should be specified inside the array.
          <ListItem key={id.toString()} value={name} />
        );
        return (
    
<div>

    <ul>
      {chipItems}
    </ul>
  );
}
{/* 
    return (
        <Form id="store-form">
            <Form.Group id="store-form-group">
                <Form.Label id="store-form-label">Select a Store</Form.Label>
                <Form.Control as="select" ref={storeRef} onChange={HandleStoreChange}>
                    {allChips.map(chip => (<option key={chip._id}>{chip.name}</option>))}
                </Form.Control>
            </Form.Group>
        </Form>
    ) */}

</div>
    )
}
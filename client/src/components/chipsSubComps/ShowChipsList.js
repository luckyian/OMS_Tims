import React, {ListItem, useRef} from 'react'
import { Form } from 'react-bootstrap'
import stores from '../../reference/stores.json'
import chips from '../../reference/chips.json'
// import Local from '../../../utils/localStorage'
import Local from '../../utils/localStorage'

export default function ShowChipList(props) {


//     const chipsRef = useRef()
//     let allChips = chips
//     function Chips(props) {
//         // Correct! There is no need to specify the key here:
//         return <li>{props.name}</li>;
//       }
      
//     function ChipsList(props) {
//         // const numbers = props.numbers;
//         const chipItems = allChips.map((chip) =>
//           // Correct! Key should be specified inside the array.
//           <ListItem key={chip._id.toString()} value={chip.name} />
//         );
//       }
      
//         return (
    
// <div>

//     <li>
//       {ChipsList}
//     </li>
  

// {/* 
//     return (
//         <Form id="store-form">
//             <Form.Group id="store-form-group">
//                 <Form.Label id="store-form-label">Select a Store</Form.Label>
//                 <Form.Control as="select" ref={storeRef} onChange={HandleStoreChange}>
//                     {allChips.map(chip => (<option key={chip._id}>{chip.name}</option>))}
//                 </Form.Control>
//             </Form.Group>
//         </Form>
//     ) */}

// </div>
//   );
// }

const chipRef = useRef()
// let possibleStores
let possibleChips = chips

// attempt to get data from indexedDB
// If it fails make possibleStores empty so the page still renders
// try{
//     // possibleStores = Local.getStoresArr()
//     // possibleStores = Local.stores
// }
// catch(e){
//     console.log("unable to get stores form local", e)
//     possibleStores = [{
//         name: "No Stores Found",
//         _id: 1
//     }]
// }

// sets the selected store 
// function HandleStoreChange(){
//     try{
//         setSelectedStore(possibleStores.filter(store => store.name === storeRef.current.value))
//     }
//     catch(e){
//         console.log("Unable to select store", e)
//     }

const listItems = possibleChips.map((chip) =>
  <li>{chip.name}</li>
);
return (
  
   <ul>{listItems}</ul>

  
)

// return (
//     <Form id="store-form">
//         <Form.Group id="store-form-group">
//             <Form.Label id="store-form-label">Select a Store</Form.Label>
//             <Form.Control as="select" ref={storeRef} onChange={HandleStoreChange}>
//                 {possibleStores.map(store => (<option key={store._id}>{store.name}</option>))}
//             </Form.Control>
//         </Form.Group>
//     </Form>
// )
}

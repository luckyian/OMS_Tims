import React, {ListItem, useRef} from 'react'
import { Form } from 'react-bootstrap'
import stores from '../../../../schema/reference/stores.json'
import chips from '../../../../schema/reference/chips.json'
// import Local from '../../../utils/localStorage'
import Local from '../../utils/localStorage'
import './chipList.css'

export default function ShowChipList(props) {


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
  <ul id="chipList">{chip.name} // sku: {chip.sku}</ul>
);
return (
  
   <ul>{listItems}</ul>

  
)


}

import React, {useRef} from 'react'
import { Form, Container } from 'react-bootstrap'
import stores from '../../../src/reference/stores.json'
import chips from '../../../src/reference/chips.json'
// import Local from '../../../utils/localStorage'
import Local from '../../utils/localStorage'
import './selectStore.css'
export default function SelectStoreDropDown({setSelectedStore}) {

    const storeRef = useRef()
    // let possibleStores
    let possibleStores = stores

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
    function HandleStoreChange(){
        try{
            setSelectedStore(possibleStores.filter(store => store.name === storeRef.current.value))
        }
        catch(e){
            console.log("Unable to select store", e)
        }
    }

    return (
        // <div class="container-fluid">
        
        // <div class="col-sm-8">
        <Form id="store-form">
            <Form.Group id="store-form-group">
                <Form.Label id="store-form-label">Select a Store</Form.Label>
                <Form.Control id="droppy-boi" as="select" ref={storeRef} onChange={HandleStoreChange}>
                    {possibleStores.map(store => (<option key={store._id}>{store.name}</option>))}
                </Form.Control>
            </Form.Group>
        </Form>
        // </div>
        
        // </div>
    )
}

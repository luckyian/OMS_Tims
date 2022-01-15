import React, {ListItem, useRef} from 'react'
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
          <ListItem key={chip._id.toString()} value={chip.name} />
        );
      }
      
        return (
    
<div>

    <ul>
      {ChipsList}
    </ul>
  

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
  );
}

// import {React, FlatList} from 'react'
// import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native'
// import GlobalStyles from '../../Styles/GlobalStyles'
// import { useData } from '../../FirebaseStuff/DataContext'
// import { useAuth } from '../../FirebaseStuff/AuthContext'
// import { Card, ListItem } from 'react-native-elements'

// export default function MedsList() {
//     const { currentUser, logout } = useAuth()
//     const { medsArray } = useData()
//     const medsArrayC = [...medsArray]
//     const styles = StyleSheet.create({
//         medsStyle: {
//             fontSize: 30,
//             paddingBottom: 25,
//             borderRadius: 5,
//             alignItems: "center",

//         },
//         cardStyle: {

//         }

//     })
//     function convert(timestamp) {
//         var date = new Date(
//             parseInt(
//                 timestamp
//             )
//         );
//     }

//     keyExtractor = (medsArrayC, index) => index.toString();

//     renderItem = ({ medsArrayC }) => (
//         <ListItem bottomDivider>

//             <ListItem.Content>
//                 <ListItem.Title>{med.medicine}</ListItem.Title>
//                 <ListItem.Subtitle>{med.dosage}</ListItem.Subtitle>
//             </ListItem.Content>

//         </ListItem>
//     );

//     // render() {
//         return (
//             <FlatList
//                 keyExtractor={medsArrayC.keyExtractor}
//                 data={medsArrayC}
//                 renderItem={medsArrayC.renderItem}
//             />
//         )
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SignupComp from "./SignupComp"



export default function Signup({children}) {
    return (
        
        <Container> 
           
                <div className="align-items-center">
                    <SignupComp />


                </div>

            

        
      </Container>
    )
}




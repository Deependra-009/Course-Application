import React, { useEffect } from 'react'
import { Container,Button } from "reactstrap";

function Home() {

    useEffect(()=>{
        document.title="Home"
    },[]);
    

    return (
        <div style={{border:"2px solid black",background:"#D1F3E6"}}>
            <Container className='text-center' style={{ padding: "50px" }}>
                <div style={{padding:"10px"}}>
                    <h1 className='display-3'>Welcome to Courses</h1>
                    <h5>This is developed for learning purpose</h5>
        
                </div>
                <Button color="primary" style={{width:"10em"}}>Start</Button>

            </Container>

        </div>

    )
}

export default Home;
import React, { useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from 'axios';
import base_url from './../API/BootApi';
import { toast } from 'react-toastify';


function Course({course,update}) {

    const deleteCourse=(id)=>{

        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Courses has been deleted",{
                    position:'bottom-center'
                });
                update(id);
                
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    


    return (
        <Card>
            <CardBody className='text-center'>
                <CardTitle tag="h2">{course.title}</CardTitle>
                <CardText>{course.description}</CardText>
                <Container style={{width:"30em",textAlign:"center",padding:"10px"}}>
                    <Button color='warning' style={{marginRight:"25px"}}>Update</Button>
                    <Button onClick={()=>{
                        deleteCourse(course.id);
                    }} color="danger" >Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
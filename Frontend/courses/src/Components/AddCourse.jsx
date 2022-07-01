import React, { useEffect } from 'react'
import { useState } from 'react';
import base_url from './../API/BootApi';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function AddCourse() {

    const [course, setCourse] = useState({});



    useEffect(() => {
        document.title = "Add Course"
    }, []);

    // function to add course in server
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    // function to post data

    const postDataToServer = (data) => {

        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                toast.success("Courses added successfully",{
                    position:'bottom-center'
                });
                
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong!!!");
            }
        )

        const form=document.getElementById('addcousrse_form');

        form.reset();

    }



    return (
        <div>
            <div>
                <h1 style={{ textAlign: "center", marginTop: "40px", fontSize: "40px" }}>Fill Course Details</h1>
                <Form onSubmit={handleForm} id="addcousrse_form">
                    <FormGroup>
                        <Label for="userId">Course ID</Label>
                        <Input type="text" name="userId" id="userId" placeholder="Enter Course ID"
                            onChange={(e) => {
                                setCourse({ ...course, id: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Course Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Enter Course Title"
                            onChange={(e) => {
                                setCourse({ ...course, title: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Course Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Enter Course Title"
                            style={{ height: "100px" }}
                            onChange={(e) => {
                                setCourse({ ...course, description: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <Container className='text-center'>
                        <Button type='submit' color='success' style={{ marginRight: "10px", width: "10em" }}>Add Course</Button>
                        <Button type='reset' color='warning' style={{ width: "10em" }}>Clear</Button>
                    </Container>
                </Form>
            </div>
        </div>
    )
}

export default AddCourse;
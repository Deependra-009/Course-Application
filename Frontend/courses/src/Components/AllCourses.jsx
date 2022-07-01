import React, { useEffect } from 'react'
import { useState } from 'react';
import Course from './Course';
import base_url from './../API/BootApi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';


function AllCourses() {

    const [courses, setCourses] = useState([]);
    const isLoaded = useRef(true);
    const isTrue=useRef(false);
    

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    }


    useEffect(() => {


        if (isLoaded.current) {
            isLoaded.current = false;
            getAllCoursesFromServer(); 
           
        }


    }, []);


    // function to call server
    const getAllCoursesFromServer = () => {

        axios.get(`${base_url}/courses`).then(
            (response) => {
                setCourses(response.data);
                console.log(response.data);
                console.log(response.data.length);
                
                if(response.data.length>0){
                    toast.success("Courses added successfully", {
                        position: 'bottom-center'
                    });
                }

            },
            (error) => {
               
                console.log(error);
                toast.error("Something went wrong");
            }
        )
        

    }






    return (
        <div>


            <h1>All Courses</h1>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course key={item.id} course={item} update={updateCourses} />
                )) : "No courses Available"
            }

        </div>
    )

}

export default AllCourses;
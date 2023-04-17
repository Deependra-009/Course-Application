import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import AddCourse from './Components/AddCourse';
import AllCourses from './Components/AllCourses';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import base_url from './API/BootApi';


function App() {

  const [email,setEmail]=useState();
  axios.get(`${base_url}/email`).then(
    (response) => {
        console.log(response);

      //  setEmail({
      //   email:response.data
      //  })
      //   console.log(email);
    },
    (error) => {
       
        console.log(error);
        toast.error("Something went wrong");
    }
)



  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/add-course" element={<AddCourse/>} exact/>
                <Route path="/view-courses" element={<AllCourses/>} exact/>
                
              </Routes>


            </Col>
          </Row>
        </Container>

      </div>
    </BrowserRouter>
  );
}

export default App;

package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Courses;
import com.springrest.springrest.services.CourseService;

@RestController
@CrossOrigin
public class MyController {
	
	@Autowired
	CourseService  service;
	
	@GetMapping("/home")
	public String home() {
		return "welcome to course application";
	}
	
	// get the courses
	
	@GetMapping("/courses")
	public List<Courses> getCourses(){
		
		return this.service.getCouses();
	}
	
	@GetMapping("/courses/{id}")
	public Courses getCourse(@PathVariable String id) {
		return this.service.getCourse(Long.parseLong(id));
	}
	
	@PostMapping("/courses")
	public Courses addCourse(@RequestBody Courses course) {
		return this.service.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Courses updateCourse(@RequestBody Courses course) {
		return this.service.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.service.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

}

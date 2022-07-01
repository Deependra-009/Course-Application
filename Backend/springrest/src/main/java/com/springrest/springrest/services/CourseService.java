package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Courses;

public interface CourseService {
	
	public List<Courses> getCouses();
	public Courses getCourse(long id);
	public Courses addCourse(Courses course);
	public Courses updateCourse(Courses course);
	public void deleteCourse(long courseId);

}

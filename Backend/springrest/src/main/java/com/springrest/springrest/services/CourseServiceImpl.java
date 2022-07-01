package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.Dao.CourseDao;
import com.springrest.springrest.entities.Courses;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao course;
	
	
	
	// get all courses
	@Override
	public List<Courses> getCouses() {
		// TODO Auto-generated method stub
		return this.course.findAll();
	}
	
	//	Get one course
	@SuppressWarnings("deprecation")
	@Override
	public Courses getCourse(long id) {
		// TODO Auto-generated method stub

		return this.course.getOne(id);
	}
	
	// Add course
	@Override
	public Courses addCourse(Courses course) {
		// TODO Auto-generated method stub
		this.course.save(course);
		return course;
	}
	
	// update course
	
	@Override
	public Courses updateCourse(Courses course) {
		// TODO Auto-generated method stub
		this.course.save(course);
		
		
		return course;
	}
	
	// delete course
	@SuppressWarnings("deprecation")
	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
		Courses entity=this.course.getOne(courseId);
		this.course.delete(entity);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
//	-------------------------------------------------------------------------------
	/*
	
	List<Courses> list;
	
	public CourseServiceImpl(){
		list=new ArrayList<>();
		list.add(new Courses(1,"Java Core","this couse contains basic java"));
		list.add(new Courses(2,"Spring Boot","Creating Rest Api"));
	}

	@Override
	public List<Courses> getCouses() {
		// TODO Auto-generated method stub
		return list;
	}

	@Override
	public Courses getCourse(long id) {
		// TODO Auto-generated method stub
		Courses c=null;
		for(Courses i:list) {
			if(id==i.getId()) {
				c=i;
				break;
			}
		}
		return c;
	}

	@Override
	public Courses addCourse(Courses course) {
		// TODO Auto-generated method stub
		list.add(course);
		return course;
	}

	@Override
	public Courses updateCourse(Courses course) {
		// TODO Auto-generated method stub
		list.forEach(e->{
			if(e.getId()==course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		
		
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
		list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
		
	}
	
	*/

}

package com.springrest.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springrest.springrest.entities.Courses;

@Repository
public interface CourseDao extends JpaRepository<Courses, Long> {

}

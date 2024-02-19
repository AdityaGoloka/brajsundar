package com.brajsundar.server.Service.Courses;

import java.util.List;

import com.brajsundar.server.Model.Courses;

public interface CourseService {
    Courses uploadCourse(Courses courses);

    List<Courses> getCourses();

    Courses getCourseById(String id);

    Courses updateCourse(Courses courses);

    void deleteCourse(String id);

}

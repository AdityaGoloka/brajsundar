package com.brajsundar.server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.brajsundar.server.Model.Courses;
import com.brajsundar.server.Service.Courses.CourseService;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/course")
    public ResponseEntity<Courses> uploadCourse(@RequestBody Courses courses) {
        return ResponseEntity.ok().body(this.courseService.uploadCourse(courses));
    }

    @GetMapping("/course")
    public ResponseEntity<List<Courses>> getCourses() {
        return ResponseEntity.ok().body(courseService.getCourses());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Courses> getCourseById(@PathVariable String id) {
        return ResponseEntity.ok().body(courseService.getCourseById(id));
    }

    @PutMapping("/course/{id}")
    public ResponseEntity<Courses> updateCourse(@PathVariable String id, @RequestBody Courses courses) {
        courses.setId(id);
        return ResponseEntity.ok().body(this.courseService.updateCourse(courses));
    }

    @DeleteMapping("/course/{id}")
    public HttpStatus deleteCourse(@PathVariable String id) {
        this.courseService.deleteCourse(id);
        return HttpStatus.OK;
    }
}

package com.brajsundar.server.Service.Courses;

import org.springframework.transaction.annotation.Transactional;

import com.brajsundar.server.Model.Courses;
import com.brajsundar.server.Repository.CoursesRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CoursesRepository coursesRepository;

    @Override
    public Courses uploadCourse(Courses courses) {
        return this.coursesRepository.save(courses);
    }

    @Override
    public List<Courses> getCourses() {
        return this.coursesRepository.findAll();
    }

    @Override
    public Courses getCourseById(String id) {
        Optional<Courses> Courses = this.coursesRepository.findById(id);

        if (Courses.isPresent()) {
            return Courses.get();
        } else {
            System.out.println("Record Not found with Id: " + id);
        }
        return null;
    }

    @Override
    public Courses updateCourse(Courses courses) {
        Optional<Courses> Courses = this.coursesRepository.findById(courses.getId());

        if (Courses.isPresent()) {
            Courses updtedCourse = Courses.get();
            updtedCourse.setId(courses.getId());
            updtedCourse.setName(courses.getName());
            updtedCourse.setSlug(courses.getSlug());
            updtedCourse.setPrice(courses.getPrice());
            updtedCourse.setObjectives(courses.getObjectives());
            updtedCourse.setHighlights(courses.getHighlights());
            updtedCourse.setAssessment(courses.getAssessment());
            updtedCourse.setOutline(courses.getOutline());
            return this.coursesRepository.save(updtedCourse);

        } else {
            System.out.println("Record Not found with id: " + courses.getId());
        }
        return courses;
    }

    @Override
    public void deleteCourse(String id) {
        Optional<Courses> Courses = this.coursesRepository.findById(id);

        if (Courses.isPresent()) {
            this.coursesRepository.delete(Courses.get());
        } else {
            System.out.println("Record Not Found wit id: " + id);
        }
    }

}

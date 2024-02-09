package com.studentassistance.sanju.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.sanju.dto.request.CourseRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;
import com.studentassistance.sanju.model.Course;
import com.studentassistance.sanju.repository.CourseRepository;
import com.studentassistance.sanju.service.CourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

     @Override
    public BasicResponse<CourseRequest> getAllCourse(){
         List<Course> courses = courseRepository.findAll();
          List<CourseRequest> courseResponses = courses.stream().map(course-> CourseRequest.builder()
            .courseId(course.getCourseId())
            .courseName(course.getCourseName())
            .description(course.getDescription())
            .duration(course.getDuration())
            .fee(course.getFee())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<CourseRequest>builder()
            .message("Course data fetched successfully!!!")
            .data(courseResponses)
            .build();

    }

    @Override
    public RegisterResponse addCourse(CourseRequest course) {
        
        var add = Course.builder()
            .courseId(course.getCourseId())
            .courseName(course.getCourseName())
            .description(course.getDescription())
            .duration(course.getDuration())
            .fee(course.getFee())
            .build();
        courseRepository.save(add);
        return RegisterResponse.builder()
            .message("Course added successfully")
            .build();
    }

    @Override
    public RegisterResponse editCourse(String courseId, CourseRequest courseRequest) {
    RegisterResponse response = new RegisterResponse();
    try {
        
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            Course existingCourse = optionalCourse.get();
            
            existingCourse.setCourseName(courseRequest.getCourseName());
            existingCourse.setDescription(courseRequest.getDescription());
            existingCourse.setDuration(courseRequest.getDuration());
            existingCourse.setFee(courseRequest.getFee());
            courseRepository.save(existingCourse);
            response.setMessage("Course updated successfully");
            return response;
        } else {
            response.setMessage("Course not found");
            return response;
        }
    } catch (Exception e) {
        response.setMessage("Something went wrong");
        return response;
    }
}



    @Override
    public RegisterResponse deleteCourse(String courseId) {
    RegisterResponse response = new RegisterResponse();
    try {
        
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            courseRepository.deleteById(courseId);
            response.setMessage("Course deleted successfully");
            return response;
        } else {
            response.setMessage("Course not found");
            return response;
        }
    } catch (Exception e) {
        response.setMessage("Something went wrong");
        return response;
    }
}

}

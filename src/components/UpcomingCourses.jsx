import React, { Component } from "react";
import TitleWithMark from "./TitleWithMark";
import formattedDate from "../utils/formattedDate";

const UpcomingCourses = ({ onClick, courses }) => (
  <div className="upcoming-courses mt-5">
    <div
      id="upcoming-courses-indicator"
      className="carousel slide position-relative"
      data-ride="carousel"
      touch="true"
    >
      <div className="carousel-inner">
        {courses &&
          courses.map((course, index) => (
            <div
              className={`carousel-item ${index === 0 && "active"}`}
              key={course.title}
            >
              <div className="d-flex">
                <div className="content">
                  <TitleWithMark text="Upcoming Courses" />
                  <h4>
                    Check our upcoming course availability online.
                    Alternatively, you can discuss which course could be right
                    for you by completing our Contact form. One of our expert
                    trainers will get back to you straight away.
                  </h4>
                  <h5 className="blue-font mt-3 mb-2">{course.title}</h5>
                  <p>{course.overview}</p>
                  <div className="d-flex flex-wrap flex-lg-nowrap">
                    <div className="next-course w-100 p-3">
                      {`Next Course: ${formattedDate(course.dates[0].date)}`}
                      {course.dates[0].type && ` - ${course.dates[0].type}`}
                    </div>
                    <div className="position-relative">
                      <button onClick={onClick}>BOOK COURSE</button>
                    </div>
                  </div>
                </div>
                <div
                  className="course-image"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
              </div>
            </div>
          ))}
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#upcoming-courses-indicator"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#upcoming-courses-indicator" data-slide-to="1" />
        <li data-target="#upcoming-courses-indicator" data-slide-to="2" />
      </ol>
      <a
        className="carousel-control-prev d-none d-md-block"
        href="#upcoming-courses-indicator"
        role="button"
        data-slide="prev"
      >
        <div className="carousel-prev-icon">
          <div aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </div>
      </a>
      <a
        className="carousel-control-next d-none d-md-block"
        href="#upcoming-courses-indicator"
        role="button"
        data-slide="next"
      >
        <div className="carousel-next-icon">
          <div aria-hidden="true" />
          <span className="sr-only">Next</span>
        </div>
      </a>
    </div>
  </div>
);

export default UpcomingCourses;

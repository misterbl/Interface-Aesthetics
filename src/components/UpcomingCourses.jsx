import React, { Component } from "react";
import TitleWithMark from "./TitleWithMark";
import home1 from "../assets/home1.jpg";
import courses from "../data/courses";

export default class UpcomingCourses extends Component {
  render() {
    return (
      <div className="upcoming-courses">
        <div
          id="upcoming-courses-indicator"
          className="carousel slide position-relative"
          data-ride="upcoming-courses-carousel"
        >
          {/* <ol className="carousel-indicators">
          <li
            data-target="#upcoming-courses-indicator"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#upcoming-courses-indicator" data-slide-to="1" />
          <li data-target="#upcoming-courses-indicator" data-slide-to="2" />
          <li data-target="#upcoming-courses-indicator" data-slide-to="3" />
        </ol> */}

          <div className="carousel-inner">
            {courses.map((course, index) => (
              <div
                className={`carousel-item ${index === 0 && "active"}`}
                data-interval="10000"
              >
                <div className="d-flex">
                  <div>
                    <TitleWithMark text="Upcoming Courses" />
                    <p className="font-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In congue, neque at dignissim condimentum, metus nisl
                      luctus lectus, et consequat tellus justo nec augue.
                    </p>
                    <p className="blue-font mt-3 mb-2">{course.title}</p>
                    <p className="font-16">{course.overview}</p>
                  </div>
                  <img
                    src={course.image}
                    className="course-image"
                    alt={course.title}
                  />
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
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
            className="carousel-control-next"
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
  }
}
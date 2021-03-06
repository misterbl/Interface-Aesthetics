import React from "react";

const CourseCard = ({ title, handleClick, price, image }) => (
  <div
    className="ml-5 course-card position-relative"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div />
    <div>
      <p>{title}</p>
      <p>{`from ${price}`}</p>
      <button onClick={handleClick}>{`MORE INFO & BOOK`}</button>
    </div>
  </div>
);

export default CourseCard;

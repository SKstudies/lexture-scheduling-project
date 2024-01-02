// src/components/AddCourseForm.js
import React, { useState } from 'react';

const AddCourseForm = ({ onAddCourse }) => {
  const [courseData, setCourseData] = useState({
    name: '',
    level: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(courseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={courseData.name} onChange={handleChange} required />

      <label>Level:</label>
      <input type="text" name="level" value={courseData.level} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={courseData.description} onChange={handleChange} required />

      <label>Image URL:</label>
      <input type="text" name="image" value={courseData.image} onChange={handleChange} required />

      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourseForm;
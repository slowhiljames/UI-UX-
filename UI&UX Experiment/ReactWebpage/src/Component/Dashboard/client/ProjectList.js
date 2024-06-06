// ClientDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects with assigned site engineers
    const fetchProjects = async () => {
      try {
        const response = await axios.get(' http://localhost:5000/projects/getprojects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []); // Fetch projects on component mount

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <strong>{project.name}</strong>: {project.details} | Assigned Engineer: {project.engineerName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

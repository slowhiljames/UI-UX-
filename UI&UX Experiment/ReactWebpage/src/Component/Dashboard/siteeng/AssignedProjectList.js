// SiteEngineerDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SiteEngineerDashboard = () => {
  const [assignedProjects, setAssignedProjects] = useState([]);

  useEffect(() => {
    // Fetch assigned projects for the site engineer
    const fetchAssignedProjects = async () => {
      try {
        const response = await axios.get('frontend/src/Component/auth/Login.js/projects/assignedProjects');
        setAssignedProjects(response.data);
      } catch (error) {
        console.error('Error fetching assigned projects:', error);
      }
    };
    fetchAssignedProjects();
  }, []); // Fetch projects on component mount

  return (
    <div>
      <h2>Assigned Projects</h2>
      <ul>
        {assignedProjects.map((project) => (
          <li key={project._id}>
            <strong>{project.name}</strong>: {project.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteEngineerDashboard;

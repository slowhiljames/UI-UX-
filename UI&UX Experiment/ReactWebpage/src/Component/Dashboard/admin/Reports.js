// SiteEngineerAssignmentComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SiteEngineerAssignmentComponent = () => {
  const [projects, setProjects] = useState([]);
  const [engineers, setEngineers] = useState([]);

  useEffect(() => {
    // Fetch list of approved projects
    axios.get('/projects/approved')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching approved projects:', error);
      });

    // Fetch list of available site engineers
    axios.get('/engineers')
      .then(response => {
        setEngineers(response.data);
      })
      .catch(error => {
        console.error('Error fetching site engineers:', error);
      });
  }, []);

  const handleAssignment = (projectId, engineerId) => {
    // Send site engineer assignment to backend
    axios.put(`/projects/${projectId}/assignEngineer`, { engineerId })
      .then(response => {
        // Update state or display success message
      })
      .catch(error => {
        console.error('Error assigning site engineer:', error);
      });
  };

  return (
    <div>
      <h2>Assign Site Engineers to Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.name} - {project.address}
            <select onChange={e => handleAssignment(project._id, e.target.value)}>
              <option value="">Select Engineer</option>
              {engineers.map(engineer => (
                <option key={engineer._id} value={engineer._id}>{engineer.name}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteEngineerAssignmentComponent;

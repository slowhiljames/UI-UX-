import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import  { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboardHome = () => {
  // Sample data
  const totalSiteEngineers = 10;
  const totalClients = 20;
  const totalProjects = 30;
  
  // Get today's full date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = today.toLocaleDateString(undefined, options);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch list of projects awaiting approval
    axios.get('/projects/pendingApproval')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleApproval = (projectId, approved) => {
    // Send approval status update to backend
    axios.put(`/projects/${projectId}/approve`, { approved })
      .then(response => {
        // Update state or display success message
      })
      .catch(error => {
        console.error('Error updating approval status:', error);
      });
  };

  return (
    <Container className="mt-4">
      <h1 className='text-center'>Welcome to Admin Dashboard</h1>
      <h3 className=' text-center'>{fullDate}</h3>

      <Row className="mt-4 p-5 text-center">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Site Engineers</Card.Title>
              <Card.Text className='tect-center'>{totalSiteEngineers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Clients</Card.Title>
              <Card.Text>{totalClients}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Projects</Card.Title>
              <Card.Text>{totalProjects}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className='vh-80  text-center'>
      <div>
      <h2>Projects Awaiting Approval</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.name} - {project.address}
            <button onClick={() => handleApproval(project._id, true)}>Approve</button>
            <button onClick={() => handleApproval(project._id, false)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </Container>
  );
}

export default AdminDashboardHome;

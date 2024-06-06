import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SiteEngDashboardHome = () => {
  // Sample data
  const totalSiteEngineers = 10;
  const totalClients = 20;
  const totalProjects = 30;
  
  // Get today's full date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = today.toLocaleDateString(undefined, options);

  return (
    <Container className="mt-4">
      <h1 className='text-center'>Welcome to Site Engineer Dashboard</h1>
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
        Notifaction
      </div>
    </Container>
  );
}

export default SiteEngDashboardHome;

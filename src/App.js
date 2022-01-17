import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EducationalComponent from './components/EducationalComponent';
import Experience from './components/ExperienceComponent';
import { Col, Nav, Row } from 'react-bootstrap';
import ExperienceComponent from './components/ExperienceComponent';


export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"><h4>Education </h4></Nav.Link>
         
          <EducationalComponent/>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="first"><h4>Experience</h4></Nav.Link>
          <ExperienceComponent/>
        </Nav.Item>
      </Nav>
    </Col>
    
  </Row>
</Tab.Container>

    </div>
  );
}

import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import background from '../img/wave.svg';
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import '../css/project.css';

class myProject extends Component {
    render() {
        return (
            <div style={{ height: '1500px' }}>
                <Row style={{ height: '45%', marginBottom: '50px' }}>
                    <Col sm={12} style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '0px -100px' }}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ padding: '0px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project1} className="project" />
                    </Col>
                    <Col sm={4} style={{ padding: '0px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project2} className="project" />
                    </Col>
                    <Col sm={4} style={{ padding: '0px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project3} className="project" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default myProject;
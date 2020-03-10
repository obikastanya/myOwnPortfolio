import React, { Component } from 'react';
import { Col, ProgressBar, Row, Container, Card, Accordion, Button, Badge } from 'react-bootstrap';
import { List, ListItem, ListItemContent } from 'react-mdl';
// import skillDiv from '../css/skillDiv.css';


class Skill extends Component {
    render() {
        return (
            <div style={{ height: '700px' }} id="skillDiv">
                <Container >
                    <Row >
                        <Col sm={6}>
                            <h1 style={{ textAlign: 'center' }}><b>My Skill</b></h1>
                            {/* skills using Accordion */}
                            <Accordion defaultActiveKey="0" styes={{ marginTop: '150px' }}>
                                {/* php */}
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <Badge pill variant="primary">
                                                PHP
                                            </Badge>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p>Short Review</p>
                                            <p>I started learning PHP at 2019, and now im junior php programmer with some skill with native or framework PHP. </p>
                                            <p>Native</p>
                                            <ProgressBar now={40} />
                                            <p>Laravel Framework</p>
                                            <ProgressBar now={50} />
                                            <p>Lumen Framework</p>
                                            <ProgressBar now={40} />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* Java Script */}
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            <Badge pill variant="danger">
                                                Java Script
                                            </Badge>

                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>I Learn javascript since January 2020. Now iam fullstack javaScript programmer with skill on:</p>
                                            <p>Native</p>
                                            <ProgressBar variant="danger" now={60} />
                                            <p>Reactjs Framework</p>
                                            <ProgressBar variant="danger" now={40} />
                                            <p>Nodejs</p>
                                            <ProgressBar variant="danger" now={70} />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* Docker */}
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <Badge pill variant="success">Docker</Badge>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <p>I learned how to used docker since 2020, now im expert to use it. I can config much server website on dokcer container and manage big project with integrated system.</p>
                                            <p><b>How Much Skill i had?</b></p>
                                            <ProgressBar variant="success" now={70} />


                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* Python */}
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            <Badge pill variant="warning" >Python</Badge>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>I learn Python since 2020. Now im junior as Python Programmer with beckend Skill:
                                            <p>Native</p>
                                            <ProgressBar variant="warning" now={60} />
                                            <p>Flask Framework</p>
                                            <ProgressBar variant="warning" now={70} />

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col sm={6} style={{ padding: '80px 0px 0px 50px' }} >
                            <h1 style={{ textAlign: 'center' }} ><b>I Keep Growth</b></h1>
                            <p style={{ textAlign: 'justify' }}>I am a Junior Programmer who dream to became good fullstack developper website. So i keep learn and growth, here is new things i want to learn this years:  </p>
                            <List>
                                <ListItem>
                                    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Aaron Paul</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                                </ListItem>
                            </List>

                        </Col>

                    </Row>


                </Container>

            </div >
        );
    }
}

export default Skill;
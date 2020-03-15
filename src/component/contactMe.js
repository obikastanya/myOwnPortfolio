import React, { Component } from 'react';
import { Col, Row, Table, Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class contactMe extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row style={{ padding: '5% 0 5% 0' }}>
                        <Col sm={7} >
                            <h3 style={{ textAlign: 'justify', fontWeight: '700' }}>CONTACT PERSON : </h3>
                            <Table borderless size="sm" style={{ width: '70%', height: '50%', marginTop: '5%' }}>
                                <tbody style={{ fontSize: '30px' }}>
                                    <tr>
                                        <td style={{ fontSize: '50px', verticalAlign: 'middle' }}>
                                            <FontAwesomeIcon icon="at" />
                                        </td>
                                        <td style={{ verticalAlign: 'middle' }}>
                                            @biKastanya</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: '50px', verticalAlign: 'middle' }}>
                                            <FontAwesomeIcon icon="comment" />
                                        </td>
                                        <td style={{ verticalAlign: 'middle' }}>
                                            0811-1123-3221</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: '50px', verticalAlign: 'middle' }}>
                                            <FontAwesomeIcon icon="envelope" />
                                        </td>
                                        <td style={{ verticalAlign: 'middle' }}>
                                            obi@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={4} style={{ backgroundColor: 'black', padding: '4%', color: 'white', borderRadius: '2px' }}>
                            <h3 style={{ textAlign: 'justify', fontWeight: '700' }}>SEND ME MESSAGE OR INVITE ME TO YOUR PROJECT</h3>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name : </Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address : </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formmessage">
                                    <Form.Label>Message : </Form.Label>
                                    <Form.Control as="textarea" rows="10" placeholder="Write Your Message !" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Kirim
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default contactMe;
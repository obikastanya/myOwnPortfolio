import React, { Component } from 'react';
import { Row, Col, Badge, Image, Table } from 'react-bootstrap';
import resumeProfil from '../img/resumeProfil.jpg';
// import '../css/resume.module.css';


class Resume extends Component {
    render() {
        return (

            <Row>
                <Col sm={{ span: 4, offset: 1 }} style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                    <Image src={resumeProfil} style={{ height: '500px', width: '80%', margin: '5% 0  0 10%', borderRadius: '1px' }} />
                    <h3 >Obi Kastanya</h3>
                    <p><i>Let Me Learn Your Company Technology</i></p>

                </Col>
                <Col sm={{ span: 6 }} style={{ padding: '10px 10px 100px 50px ' }}>
                    <hr style={{ border: '4px solid black' }} />
                    <Badge variant="warning" style={{ fontSize: '20px' }}>
                        Education
                        </Badge>
                    <Table responsive borderless style={{ marginBottom: '5%' }} >
                        <tbody>
                            <tr>
                                <td >2004-2010</td>
                                <td>Great Elementar School</td>
                            </tr>
                            <tr>
                                <td>2010-2013</td>
                                <td>Great Junior High School</td>
                            </tr>
                            <tr>
                                <td>2014-2017</td>
                                <td>Great High School</td>
                            </tr>
                            <tr>
                                <td>2017-2022</td>
                                <td>Great University</td>
                            </tr>
                        </tbody>
                    </Table>
                    <hr style={{ border: '4px solid black' }} />
                    <Badge variant="warning" style={{ fontSize: '20px' }}>
                        Experience
                        </Badge>
                    <Table responsive borderless style={{ marginBottom: '10%' }} >
                        <tbody>
                            <tr>
                                <td>2017-2019</td>
                                <td>Work at Campus organization as Member of Student Delegation</td>
                            </tr>
                            <tr>
                                <td>2019-2020</td>
                                <td>Joining StartUp company as freelance programmer on goverment project. </td>
                            </tr>
                        </tbody>
                    </Table >
                    <hr style={{ border: '4px solid black' }} />
                    <Badge variant="danger" style={{ fontSize: '18px', marginBottom: '3%' }}>
                        *note
                        </Badge>
                    <p style={{ margin: '0 20% 0 2%', textAlign: 'justify' }}>During my Study, i was receiving some project order that i cant include on my cv as agrement on project. But i can tell you that i had make aplication likes decision suport or some aplication with AI.</p>
                </Col>
            </Row>

        );
    }
}

export default Resume;
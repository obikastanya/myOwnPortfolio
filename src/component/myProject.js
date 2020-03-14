import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
// import background from '../img/wave.svg';
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import ModalProject from './modalProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/project.css';

class myProject extends Component {

    render() {
        return (
            <div style={{ height: '1000px' }}>
                <Row style={{ height: '25%', marginBottom: '50px', paddingTop: '5%', textAlign: 'justify' }}>

                    <Col sm={{ span: 4, offset: 2 }}
                    // style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '0px -100px' }}
                    >
                        <h3><b>This is The Project I Made During My Time in Campus Study</b></h3>
                        <hr style={{ border: '3px solid black' }} />
                    </Col>
                </Row>
                <Row className="projectrow">
                    <Col sm={4} style={{ padding: '10px 50px 50px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project1} className="project" />
                        {/* <p>Responsive Website with Bootstrap </p> */}
                        <ModalProject
                            projectname="Responsive Website with Bootstrap"
                            linkGithub="https://github.com/obikastanya/myOwnPortfolio"
                            description="This is Ui website made using html, css and bootstrap 4. Design adoptep by random image on pinterest. This project is Opensource, you could use them to your project with no licence from me"

                        />
                    </Col>
                    <Col sm={4} style={{ padding: '10px 50px 50px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project2} className="project" />
                        {/* <p>Dashboard Management Laboran </p> */}
                        <ModalProject projectname="Dashboard Management Laboran"
                            linkGithub="https://github.com/obikastanya/myOwnPortfolio"
                            description="This is Ui website made using html, css and bootstrap 4. This website contains page that represented our campus classroom management. it contains some input form, view and edit form."
                        />
                    </Col>
                    <Col sm={4} style={{ padding: '10px 50px 50px 50px', height: '100%', backgroundColor: 'black' }}  >
                        <Image src={project3} className="project" />
                        {/* <p>Company Profile Desa </p> */}
                        <ModalProject projectname="Company Profile Desa"
                            linkGithub="https://github.com/obikastanya/myOwnPortfolio"
                            description="This is Ui website made using html, css, PHP and bootstrap 4. This website is represented village in our region where there is no website to promote them. So i made the company profile to show village potential, culture and the featured product. "
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 4, offset: 4 }} className="footer" style={{ padding: '50px 5px 30px 5px', border: '1px solid black', borderRadius: '5px', marginTop: '100px', backgroundColor: 'black', color: 'white' }} >
                        <h5>Also visit my LinkedIn for more Info About Me</h5>

                        <a href="https://www.linkedin.com/" target="_blank " rel="noopener noreffer" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: '60px' }} />
                        </a>

                    </Col>
                </Row>
                <footer style={{ backgroundColor: 'black', paddingTop: '50px', marginTop: '100px', color: 'white', height: '100px', textAlign: 'center' }}>
                    <p>Copyright by Obi Kastanya </p>
                </footer>
            </div >
        );
    }
}

export default myProject;

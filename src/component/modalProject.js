import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


class ModalProject extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState(
            { show: !this.state.show }
        )
    }
    render() {
        return (

            <div>
                <Button
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        margin: '10px 0px 10px 0px'

                    }}
                    variant="link"
                    onClick={() => { this.handleModal() }}>
                    {this.props.projectname}
                </Button>

                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <Badge variant="dark">See My Project Here !</Badge>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <a href={this.props.linkGithub} target="_blank " rel="noopener noreffer" >GITHUB LINK HERE</a>
                        <h5>Description: </h5>
                        <p>{this.props.description}</p>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleModal() }}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );

    }
}

export default ModalProject;
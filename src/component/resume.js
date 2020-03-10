import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Resume extends Component {
    render() {
        return (
            <Jumbotron fluid style={{ height: '100%' }}>
                <Container>
                    <h1>This is Resume</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
              </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default Resume;
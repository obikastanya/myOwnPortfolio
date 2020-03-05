import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (

    < div style={{ height: '300px', position: 'relative' }}>
      <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
        <Header transparent title="Title" style={{ color: 'white' }}>
          <Navigation>
            <Link to="/skill">Skill</Link>
            <Link to="/myProject">My Project</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/skill">Skill</Link>
            <Link to="/myProject">My Project</Link>
            <Link to="resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div >);
}

export default App;

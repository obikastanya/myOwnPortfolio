import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
// import styles from './css/landingCss.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobileAlt, faDatabase, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faPhoenixSquadron, faAdversal, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faEnvelope, faMobileAlt, faPhoenixSquadron, faAdversal, faDatabase, faDiceD20, faLinkedin);


function App() {
  return (
    <div style={{ height: '700px', padding: '0px' }} >
      <Layout fixedHeader>
        <Header style={{ backgroundColor: 'black' }} title={<span><span style={{ color: '#ddd' }}>Obi</span><strong> Kastanya</strong></span>}>
          <Navigation>
            <Link to="/skill">Skill</Link>
            <Link to="/myProject">My Project</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer style={{ backgroundColor: 'black' }} title="Obi Kastanya">
          <Navigation style={{ backgroundColor: 'black' }} >
            <Link to="/skill">Skill</Link>
            <Link to="/myProject">My Project</Link>
            {/* <Link to="resume">Resume</Link> */}
            <Link to="/contactMe">Contact</Link>
          </Navigation>
        </Drawer>
        <Main />
        <Content />
      </Layout>
    </div>);
}

export default App;

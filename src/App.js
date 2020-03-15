import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
// import styles from './css/landingCss.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobileAlt, faDatabase, faComment, faDiceD20, faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhoenixSquadron, faAdversal, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faEnvelope, faMobileAlt, faPhoenixSquadron, faAdversal, faDatabase, faDiceD20, faLinkedin, faAt, faFacebookF, faComment);


function App() {
  return (
    <div style={{ height: '700px', padding: '0px' }} >
      <Layout fixedHeader>
        <Header style={{ backgroundColor: 'black' }} title={<span><span style={{ color: '#ddd' }}></span><strong>Obi Kastanya</strong></span>}>
          <Navigation>
            <Link to="/skill">Skill</Link>
            <Link to="/myProject">My Project</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer style={{ fontWeight: '900', backgroundColor: 'black', color: 'white' }} title="Obi Kastanya">
          <Navigation style={{ backgroundColor: 'white' }} >
            <Link to="/skill" style={{ color: 'black', fontWeight: '600' }}>Skill</Link>
            <Link to="/myProject" style={{ color: 'black', fontWeight: '600' }}>My Project</Link>
            <Link to="/contactMe" style={{ color: 'black', fontWeight: '600' }}>Contact</Link>
          </Navigation>
        </Drawer>
        <Main />
        <Content />
      </Layout>
    </div>);
}

export default App;

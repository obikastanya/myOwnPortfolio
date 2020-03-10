import React from 'react';
import Skill from './skill';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';
import contactMe from './contactMe';
import myProject from './myProject';

const Main = () => (
    <Switch>
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/" component={Resume} />
        <Route exact path="/contactMe" component={contactMe} />
        <Route exact path='/myProject' component={myProject} />
    </Switch>
)

export default Main;
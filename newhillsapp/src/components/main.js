import React from 'react';
import  {Switch, Route}  from 'react-router-dom';
//no js file addon needed for the seperate pages
import LandingPage from  './landingpage';
import Resume from './resume';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects'




const Main = () => (
<Switch>
<Route exact path="/" component={LandingPage} />
<Route path="/resume" component={Resume} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/projects" component={Projects} />

</Switch>

)

export default Main;
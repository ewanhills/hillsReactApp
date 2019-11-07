import React, { Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconMenu, CardText, IconButton} from 'react-mdl';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0};

    }

    toggleCatagories() {

        if(this.state.activeTab === 0){
            return(
                <Card shadow={0} style={{width: '650px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://www.crafts.org.uk/getfile/62ea30ec-6c1c-4e9a-ac3f-ec51a7bb0770/EX_Peter-Lane-ceramic-porcelain-bowl_misty-mountai.aspx'}}>Welcome</CardTitle>
    <CardText>
        Click on the below icon to see how this was handcrafted.
    </CardText>
    <CardActions border>
        {/* INSTAGRAM*/}
        <div className="project-social-links">
        <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
           <i class="fab fa-instagram"></i>
           </a>
           </div>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is example 2</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is example 3</h1></div>
            )
        }
        else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is example 4</h1></div>
            )
        }
        else if(this.state.activeTab === 4) {
            return (
                <div><h1>This is example 5</h1></div>
            )
        }
    }
      



    render() {
        return(
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
               <Tab>Gallery 1</Tab>
               <Tab>Gallery 2</Tab>
               <Tab>Gallery 3</Tab>
               <Tab>Gallery 4</Tab>
                <Tab> Gallery 5</Tab>                 
                </Tabs>
            <section className="projects-grid">
                <grid className="projects-grid">
                <Cell col={12}>
                <div className="content"> {this.toggleCatagories()}</div>
                </Cell>

                </grid>
           
            </section>
            </div>
        )

        }
    }

    export default Project;  
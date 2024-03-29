import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Title" scroll>
                    <HeaderRow title="Joe Bloggs Ceramics">
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/resume">Home</Link>
                            <Link to="/projects">Items</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/feedback">Feedback</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Landing</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/feedback">Feedback</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;

import React from 'react';
import NavbarCompo from './components/Navbar'

import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Respond from './components/Respond';
import Other from './components/Other';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="app ">
    <NavbarCompo />

        <div className="app__component container">
          <Row>
          <Col sm={12} xs={12} md={8} lg={8}>
            <Profile />
            <About />
            <Respond />
            <Other />

           </Col>
        </Row>
        </div>
       
    </div>
  );
}

export default App;

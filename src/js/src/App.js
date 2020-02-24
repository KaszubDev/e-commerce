import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Logo from './assets/logo.png';
import Modal from 'react-bootstrap/Modal';
import Books from './components/Books';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <div style={{minHeight: '100vh'}}>
      <div className="topBar">
        <Row style={{alignItems: 'center'}} className="justify-content-between">
          <div>
            <Image src={Logo} fluid></Image>
          </div>
          <div>
            <Button variant='light' size='md' onClick={handleShow}>Cart</Button>
          </div>
        </Row>
      </div>
      <Header/>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Books/>

    </div>
  );
}

export default App;

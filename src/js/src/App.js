import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Logo from './assets/logo.png';
import Cart from './components/Cart';
import Books from './components/Books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {

  const [show, setShow] = useState(false);
  const showCart = () => setShow(true);
  const onHide = (bool) => setShow(bool);

  return (
    <div>
      <ReactNotification />
      <Cart show={show} hide={onHide}/>
      <div style={{minHeight: '100vh'}}>
      <div className="topBar">
        <Row style={{alignItems: 'center'}} className="justify-content-between">
          <div>
            <Image src={Logo} fluid></Image>
          </div>
          <div>
            <Button style={{padding: '10px'}} variant='light' size='md' onClick={showCart}>
              <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
            </Button>
          </div>
        </Row>
      </div>
      <Header/>
      </div>

      <Books/>

      <Footer/>

    </div>

  );
}

export default App;

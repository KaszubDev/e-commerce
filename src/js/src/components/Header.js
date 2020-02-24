import React from 'react';
import '../css/Header.css';
import CountUp from 'react-countup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return(
            <div>
                <div className='Header'>
                <div className='Header_image'>
                    <div center className='Header_caption'>
                        <h1 className='text-light text-capitalize'>find  your  reading</h1>
                    </div>
                </div>
                <div className="stats d-flex">
                    <div className='w-100 text-light text-center'>
                        <Row className="stats__row justify-content-around">
                            <div>
                                <h3 style={{fontSize: '3rem', fontWeight: '700'}}><CountUp end={100} duration={5}/></h3>
                                <h4>Books</h4>
                            </div>
                            <div>
                                <h3 style={{fontSize: '3rem', fontWeight: '700'}}><CountUp end={30} duration={5}/></h3>
                                <h4>Satisfied Clients</h4>
                            </div>
                            <div>
                                <h3 style={{fontSize: '3rem', fontWeight: '700'}}><CountUp end={4} duration={5}/></h3>
                                <h4>Years of Experience</h4>
                            </div>
                        </Row>
                        <a className="text-light" href="#collection">
                            <FontAwesomeIcon className='mt-1 downArrow' icon={faAngleDoubleDown} size='3x'/>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;
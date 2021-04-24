import React from 'react';
import '../App.css';
import { Col, Row, Container, Badge, Card, Button} from "react-bootstrap";
import './HeroSection.css';
import { useHistory } from 'react-router-dom';

function HeroSection() {

    const history = useHistory();

    return (
        <div className="myBackGround"> 
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                variant="light"
                onClick={() => history.push('/about')}
                >
                LETS GO!
                </Button>
                <Button
                variant="light"
                onClick={() => history.push('/whattobring')}
                >
                WHAT TO BRING? 
                </Button>
            </div>
        </div>
        </div>
    );
}

export default HeroSection;
import React from 'react'
import { Col, Row, Container, Card, Button, CardGroup } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './ResponsivePage.css'

import Cards from '../components/Cards'
import sanPaoloImage from '../images/sanpaolo.jpg'
import calendarImage from '../images/calendar.png'

function About() {
    return (
        <div className="myPagesBackGround">
            <h1 className="h1Box">Spritz Party</h1>
            <p className="pBox">
                Where? Grattacielo San Paolo Park
            </p>
            <p className="pBox">
                When? Sunday 25/04/2021 15:00
            </p>
            
        </div>
    )
}

export default About

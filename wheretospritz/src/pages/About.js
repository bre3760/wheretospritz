import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import myPicture from '../images/me.jpg'
import Image from 'react-bootstrap/Image'
import pageStyle from './Pages.module.css'

function About() {
    return (
        <div className = {pageStyle.container}>
            <img  className={pageStyle.image} src={myPicture} />
            <div className={pageStyle.middle}>
                <div className={pageStyle.text}>Brendan</div>
            </div>
        </div>
    )
}

export default About

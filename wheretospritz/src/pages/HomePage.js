import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row, Container, Badge, Card, Button} from "react-bootstrap";
import spritzImage from '../images/spritz.png'
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards'

function HomePage() {
    return (
        <div >
            <HeroSection></HeroSection>
        </div>

    )
}

export default HomePage
//style={{height:'100px',width:'100px'}}
//xs={12} sm={4} md={{ span: 6, offset: 10 }}
//className={responsivePageStyle.siteContainer}
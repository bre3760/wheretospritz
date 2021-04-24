import React from 'react'
import { Col, Row, Container, Card, Button} from "react-bootstrap";
import myPicture from '../images/me.jpg'
import Image from 'react-bootstrap/Image'
import pageStyle from './Pages.module.css'
import responsivePageStyle from './ResponsivePage.module.css'

import Cards from '../components/Cards'
import spritzImage from '../images/spritz.png'

function About() {
    return (
        <div className={responsivePageStyle.main}>
            <Container fluid>
            <Row>
                <Col >
                    <Card style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={spritzImage} /> */}
                    <Card.Body>
                        <Card.Title>Where?</Card.Title>
                        <Card.Text>
                        Grattacielo San Paolo Park
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={spritzImage} /> */}
                    <Card.Body>
                        <Card.Title>When?</Card.Title>
                        <Card.Text>
                        Sunday 25/04/2021 15:00
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            
            </Container>
        </div>
    )
}

export default About

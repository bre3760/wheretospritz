import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row, Container, Badge, Card, Button} from "react-bootstrap";
import spritzImage from '../images/spritz.png'
import pageStyle from './Pages.module.css'
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards'
function HomePage() {
    return (
        <div >
            <HeroSection></HeroSection>
            
            {/* <Container fluid>
            <Row>
                <Col >
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={spritzImage} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Col >1 of 3</Col>
                <Col >2 of 3</Col>
                <Col >3 of 3</Col>
            </Row>
            </Container> */}
            {/* <div className={pageStyle.right}>
                <img className={pageStyle.right} src={spritzImage}  />
            </div>
            <div className={pageStyle.homepage_div}>
                <h1 className={pageStyle.homepage_h1}>When?</h1>
                <p className={pageStyle.homepage_p}> Sun 25/04/2021 16:00</p>

                <h1 className={pageStyle.homepage_h1}>Where?</h1>
                <p className={pageStyle.homepage_p}> Grattacielo </p>

                <h1 className={pageStyle.homepage_h1}>What to bring?</h1>
                <p className={pageStyle.homepage_p}> Spritz and Food </p>

            </div> */}
        </div>

    )
}

export default HomePage
//style={{height:'100px',width:'100px'}}
//xs={12} sm={4} md={{ span: 6, offset: 10 }}
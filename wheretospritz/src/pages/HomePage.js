import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row, Container} from "react-bootstrap";
import spritzImage from '../images/spritz.png'
import pageStyle from './Pages.module.css'

function HomePage() {
    return (
        <div className={pageStyle.right}>
            <img className={pageStyle.right} src={spritzImage} fluid />
        </div>
    )
}

export default HomePage
//style={{height:'100px',width:'100px'}}
//xs={12} sm={4} md={{ span: 6, offset: 10 }}
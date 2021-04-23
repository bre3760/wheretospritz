import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row, Container} from "react-bootstrap";
import spritzImage from '../images/spritz.png'
import pageStyle from './Pages.module.css'

function HomePage() {
    return (
        <div >
            <div className={pageStyle.right}>
                <img className={pageStyle.right} src={spritzImage} fluid />
            </div>
            <div className={pageStyle.homepage_div}>
                <h1 className={pageStyle.homepage_h1}>When?</h1>
                <p className={pageStyle.homepage_p}> Sun 25/04/2021 16:00</p>

                <h1 className={pageStyle.homepage_h1}>Where?</h1>
                <p className={pageStyle.homepage_p}> Grattacielo </p>

                <h1 className={pageStyle.homepage_h1}>What to bring?</h1>
                <p className={pageStyle.homepage_p}> Spritz and Food </p>

            </div>
        </div>

    )
}

export default HomePage
//style={{height:'100px',width:'100px'}}
//xs={12} sm={4} md={{ span: 6, offset: 10 }}
import React from "react"
import melanie from "../assets/images/melanie.jpeg"
import { Col, Container, Row } from "../components/GridControl/Grid"
import Header from "../components/Header"
import DisplaySocialMedia from "../components/SocialMedia/displaySocialMedia"

export default function Home() {
    return (
        <Container >
           <div className="jumbotron">
                <Header />
                <hr className="hor-line"/>
                <Row>
                    <Col size="lg-6">
                        <img src={melanie} alt="melanie"/>
                    </Col>
                    <Col size="lg-1">
                    </Col>
                    <Col size="lg-5" className="bio">
                        <p>
                        Hello World, I'm Melanie Torres! I am a Full Stack Developer.
                        </p>
                        <p>
                        I have recently just finished a web programming bootcamp through the University of Central Florida. 
                        While I may be new to this, I am so excited about this new journey and what's to come.
                        </p>
                        <p>
                        In Full Stack Developement I aim to appeal on more front-end work. I also plan on using my new skills I've learned to 
                        start my own online business and create my website myself. 
                        </p>
                    </Col>
                </Row>
                <DisplaySocialMedia />
            </div>
        </Container>
    )
}
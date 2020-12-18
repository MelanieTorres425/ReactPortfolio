import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"
import Header from "../components/Header"


export default function Contact() {
    return (
        <Container >
            <Header />
            <hr/>
            <Row>
                <Col size="lg-12 md-12 s-12" >
                <form>
                    <div>
                    <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder="Jane Doe" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <button type="submit" className="btn btn-dark" id="proj-link">Submit</button>
                </Col>
            </Row>
        </Container>
    )
}
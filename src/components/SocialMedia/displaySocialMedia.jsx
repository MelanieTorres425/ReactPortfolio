import React from "react"
import { Col, Row } from "../GridControl/Grid"

export default function DispaySocialMedia() {
    return (
        <Row>
            <Col className="social-media" size="lg-4 md-12 sm-12">
            <p id="soc-media">Check out my Social Media</p>
            <hr/>
                <Row>
                    <Col size="lg-12 md-12 sm-12" className="inner-social-media">
                        <a className="btn-floating btn-lg btn-git" type="button" role="button"
                            href="https://github.com/MelanieTorres425" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        
                        <a className="btn-floating btn-lg btn-so" type="button" role="button"
                            href="https://stackoverflow.com/users/13630765/melanie-torres" rel="noreferrer" target="_blank"><i className="fab fa-stack-overflow"></i></a>

                        <a className="btn-floating btn-lg btn-tw" type="button" role="button"
                            href="https://linkedin.com/in/melanie-torres-350592187" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>

                    
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

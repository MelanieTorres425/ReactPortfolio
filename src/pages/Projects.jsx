import React from "react"
import projectInfo from "../assets/seed/projectInfo.json"
import Projects from "../components/displayProjects"
import { Container, Row } from "../components/GridControl/Grid"
import Header from "../components/Header"

export default function Project() {
    return (
        <Container >
            <Header />
            <hr />
            <Row>
            {projectInfo.map(project => (
                <Projects {...project}/>
            ))}
            </Row>
        </Container>
    )
}

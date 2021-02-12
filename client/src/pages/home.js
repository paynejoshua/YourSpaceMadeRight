import React from "react";
import NavItems from "../components/NavItems";
import Jumbotron from "react-bootstrap/Jumbotron";
import SocialMedia from "../components/SocialMedia"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Home() {

    return (
        <>
            <div className="BGImage">

            <Jumbotron className="text-center">
                <h1>Your Space Made Right</h1>
                <NavItems index={0} />
            </Jumbotron>
            <Container >
                <Row className="justify-content-around justify-content-center">
                    {/* <Col xs={12} xl={3}>
                        <SocialMedia />
                    </Col> */}
                    <Col xs={12}  xl={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Services I offer</Card.Title>
                                    <Card.Text>
                                        Here are some of the services that I currently offer
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12}  xl={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Services I offer</Card.Title>
                                    <Card.Text>
                                        Here are some of the services that I currently offer
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Services I offer</Card.Title>
                                    <Card.Text>
                                        Here are some of the services that I currently offer
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <SocialMedia />
            </div>

        </>
    )
}

export default Home
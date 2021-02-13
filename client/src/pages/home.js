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
            <div className="BGHome">

            <Jumbotron className="text-center homeJumbotron">
                <h1 className="homePageTitle">Your Space Made Right</h1>
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
                                <Card.Title>Some text here</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12}  xl={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Some text here</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} xl={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Some text here</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
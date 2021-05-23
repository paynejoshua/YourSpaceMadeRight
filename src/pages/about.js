import React from "react";
import NavItems from "../components/NavItems";
import ProfilePic2 from "../assets/headshot2.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"


function About() {

    return (
     
        <div className="secondaryBG">
            <NavItems index={1} />

            <Container className="mt-5 scroll">
                <Row>
                    <Col xs={12} xl={6}>
                        <Image fluid className="profilePicBorder" src={ProfilePic2} />

                    </Col>
                    <Col xs={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Bethany Hauck:
                                </Card.Title>
                                <Card.Text>
                                Born and raised in Washington state with a real love for the outdoors. I find pleasure in experiencing adventures in nature, as well as cultivating spaces to embrace community and meaning indoors. In my spare time, I enjoy cooking, rock climbing, and biking around Seattle.
                                <br />
                                <br />
                                Likes: wind, long bike rides, fresh produce from the garden, sunsets, plant-based ice cream
                                <br />
                                <br />
                                Dislikes: yellow traffic lights, sitting still, lack of framework, isolation 

                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

            </div>
   
    )
}

export default About
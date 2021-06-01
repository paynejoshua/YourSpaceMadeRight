import React from "react";
import NavItems from "../components/NavItems";
import ProfilePic from "../assets/headshot1.jpg";
import SocialMedia from "../components/SocialMedia";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import BlogIcon from "../assets/blogIcon.png";
// import Button from "react-bootstrap/Button"


function Blog() {

    return (
        <div className="secondaryBG">
            <NavItems index={3} />

                <Container fluid className="mt-5 scroll">
                    <Row className="justify-content-around">

                        <Col xs={12} xl={{span: 3, offset: 1}}>
                            <img className="profilePicBorder" alt="Bethany" src={ProfilePic} style={{ width: "18rem" }} />
                            <SocialMedia isVertical={false} blog={true}></SocialMedia> 
                            
                        </Col>
                        <Col>
                            <Col xs={12} xl={9}>
                                <Card className="profilePicBorder">
                                    <Card.Body>
                                        <Card.Title className="blogFont">
                                           My Recent Post:
                                </Card.Title>
                                        <Card.Text className="blogFont">
                                            {/* use the RSS feed from her blog. Look into this once she decides what blog site she would like to use */}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Col>
                    </Row>
                </Container>

        </div>
    )
}

export default Blog
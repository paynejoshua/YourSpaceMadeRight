import React from "react";
import NavItems from "../components/NavItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import BullRiding from "../assets/BullRiding.JPG";
import SocialMedia from "../components/SocialMedia"



function Contact() {


   

    return (
        <div className="secondaryBG">
            <NavItems index={5} />
            <Container className="scroll d-flex justify-content-center">
                <Row>
                    <Col className="mt-3" sm={3} md={3} lg={3} xl={3} xxl={3}>
                        <Card className="profilePicBorder">
                            <Card.Img src={BullRiding}></Card.Img>
                        </Card>
                        <SocialMedia isVertical={false} />
                    </Col>
                    <Col sm={9} md={9} lg={9} xl={9} xxl={9}>
                    
                        <iframe 
                        title="Contact Form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd9TC0hXeMKSfdgqmFKq2AZm0HuPuASUKUiwSezUw8cI4IluA/viewform?embedded=true" 
                        width="640" 
                        height="1000" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0">Loading…
                        </iframe>
                    </Col>
                </Row>


            </Container>

        </div>
    )
}

export default Contact
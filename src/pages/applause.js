import React from "react";
import NavItems from "../components/NavItems";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Reviews from "../utils/Reviews";
import SocialMedia from "../components/SocialMedia";

function Applause() {

    return (
        <div className="secondaryBG">
            <NavItems index={4} />
            <SocialMedia />
            <Container fluid className="scroll">

            <Row >
                
            
                {Reviews.map(item =>(
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}  className="mt-4">
                        <Card style={{width: "30rem"}} className="profilePicBorder dropShadow">
                            <Card.Body key={item.title}>

                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                
                                <Card.Text>
                                    {item.body}
                                </Card.Text>

                            </Card.Body>
                                        
                            <Card.Footer>-{item.reviewer}</Card.Footer>
                        
                        </Card>

                    </Col>
                ))}
                
            </Row>
            </Container>

        </div>
    )
}

export default Applause
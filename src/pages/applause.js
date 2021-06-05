import React from "react";
import NavItems from "../components/NavItems";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Reviews from "../utils/Reviews"

function Applause() {

    return (
        <div className="secondaryBG">
            <NavItems index={4} />
            <Container fluid className="scroll">

            <Row>
            
                {Reviews.map(item =>(
                    <Col sm={12} md={4} lg={{span: 3, offset: 2}} xl={{span: 3, offset: 1}} xxl={{span: 3, offset: 1}} className="mt-4">
                        <Card style={{width: "18rem"}} className="profilePicBorder dropShadow">
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
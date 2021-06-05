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

            <Row className="d-flex justify-content-center ">
            
                            {Reviews.map(item =>(
                <Col sm={12} md={{span: 4, offset: 2}} lg={3} style={{margin: "1rem"}}>
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
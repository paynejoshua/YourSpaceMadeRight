import React from "react";
import NavItems from "../components/NavItems";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"


function Contact() {

    return (
        <div className="mainBG">
            <NavItems index={4} />
            <Container>
                <Form className="websiteFont">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="input" placeholder="John/Jane Smith" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="customBtn">Send</Button>
                </Form>

            </Container>


            {/* send messages to yourspacemaderight@gmail.com */}

            {/* BG could be cool stylistic picture of either a typewriter like: https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2F0gkw_9fy0eQ&psig=AOvVaw2QLepeOasGX8K90jqL8KzZ&ust=1613787137447000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjo2qnw9O4CFQAAAAAdAAAAABAD
            or of a carrier pigeon like: https://www.google.com/url?sa=i&url=https%3A%2F%2Fprologue.blogs.archives.gov%2F2018%2F01%2F08%2Funsung-heroes-of-world-war-i-the-carrier-pigeons%2F&psig=AOvVaw0wQOCT4tl2835qi1Oo58nt&ust=1613787179950000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjtlvHv9O4CFQAAAAAdAAAAABAD
            or moving BG image: 
            */}
        </div>
    )
}

export default Contact
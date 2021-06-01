import React, {useState} from "react";
import NavItems from "../components/NavItems";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";



function Contact() {


   

    return (
        <div className="mainBG">
            <NavItems index={5} />
            <Container className="scroll d-flex justify-content-center">
               

                <iframe 
                    title="Contact Form" 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd9TC0hXeMKSfdgqmFKq2AZm0HuPuASUKUiwSezUw8cI4IluA/viewform?embedded=true" 
                    width="640" 
                    height="670" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">Loading…</iframe>

            </Container>

        </div>
    )
}

export default Contact
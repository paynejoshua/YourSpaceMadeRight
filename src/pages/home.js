import React from "react";
import NavItems from "../components/NavItems";
import Jumbotron from "react-bootstrap/Jumbotron";
// import SocialMedia from "../components/SocialMedia"
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

function Home() {

    return (
        
        <div className="mainBG">

            <Jumbotron className="text-center homeJumbotron">
                <h1 className="homePageTitle">Your Space Made Right</h1>
                <NavItems index={0} />
            </Jumbotron>
            
            {/* <SocialMedia /> */}
            </div>

      
    )
}

export default Home
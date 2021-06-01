import React from "react";
import NavItems from "../components/NavItems";
import Jumbotron from "react-bootstrap/Jumbotron";
import SocialMedia from "../components/SocialMedia"

function Home() {

    return (
        
        <div className="mainBG">

            <Jumbotron className="text-center homeJumbotron">
                <h1 className="homePageTitle">Your Space Made Right</h1>
            </Jumbotron>
            <NavItems index={0} />
            
            <SocialMedia />

            </div>

      
    )
}

export default Home
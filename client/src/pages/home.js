import React from "react";
import NavItems from "../components/NavItems";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import HomeBG from "../assets/wallpaper-3329990_1920.jpg";
import Image from "react-bootstrap/Image"

function Home() {


    return (
        <>
            <Jumbotron className="text-center">
                <h1>Your Space Made Right</h1>
                <NavItems />
            </Jumbotron>
        </>
    )
}

export default Home
import React from "react";
import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"


function SocialButtons() {

    return (
        <>
            {/* For SocialIcon you can specifiy the url i.e url="https://www.facebook.com/bethany.hauck" 
            and this will automatically detect the social media icon and link to her profile
            
            otherwise you can do the following network="twitter" and it will just capture the icon*/}

            <ButtonGroup vertical className="transparent">
                <Button className="transparent">
                    <SocialIcon network="facebook" fgColor="white"/>
                </Button>
                <Button className="transparent">
                    <SocialIcon network="instagram" fgColor="white" bgColor="orange" />
                </Button>
                <Button className="transparent">
                    <SocialIcon network="youtube" fgColor="white"/>
                </Button>
            </ButtonGroup>


        </>
    )
}

export default SocialButtons
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BlogIcon from "../../assets/blogIcon.png";


function SocialButtons(props) {
    const [isVertical, setIsVertical] = useState(true)




    useEffect(() => {
        if (props.isVertical == false) {
            setIsVertical(false)
        }
      
    })




    return (
        <div>


            {/* For SocialIcon you can specifiy the url i.e url="https://www.facebook.com/bethany.hauck" 
            and this will automatically detect the social media icon and link to her profile
            
            otherwise you can do the following network="twitter" and it will just capture the icon*/}


            {
                isVertical
                    ? <ButtonGroup vertical className="transparent vertical">
                        <Button className="transparent">
                            <SocialIcon network="facebook" onClick={() => window.open("https://www.facebook.com/Your-Space-Made-Right-102444671236614", "_blank")} fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent"> 
                            <SocialIcon network="pinterest" fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent">
                            <SocialIcon network="instagram" fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent">
                            <SocialIcon network="youtube" fgColor="white" bgColor="#958DE2" />
                        </Button>
                    </ButtonGroup>


                    : <ButtonGroup className="transparent vertical">
                        <Button className="transparent">
                            <SocialIcon network="facebook" onClick={() => window.open("https://www.facebook.com/Your-Space-Made-Right-102444671236614", "_blank")} fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent"> 
                            <SocialIcon network="pinterest" fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent">
                            <SocialIcon network="instagram" fgColor="white" bgColor="#958DE2" />
                        </Button>
                        <Button className="transparent">
                            <SocialIcon network="youtube" fgColor="white" bgColor="#958DE2" />
                        </Button>
                        



                    </ButtonGroup>



            }
        </div>
    )
}

export default SocialButtons
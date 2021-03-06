import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Col from "react-bootstrap/Col";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";


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
                    ? <ButtonGroup vertical className="vertical" >
                        <Button className="btnBGV">
                            <FontAwesomeIcon className="facebook" style={{color: "white"}} size="2x" icon={faFacebook} onClick={() => window.open("https://www.facebook.com/Your-Space-Made-Right-102444671236614", "_blank")} />
                        </Button>
                        <Button className="transparent btnBGV"> 
                            <FontAwesomeIcon className="pinterest" style={{color: "white"}} size="2x"  icon={faPinterest} onClick={() => window.open("https://www.pinterest.com/yourspacemaderight/_saved/", "_blank")} />
                        </Button>
                        <Button className="transparent btnBGV">
                            <FontAwesomeIcon size="2x" style={{color: "white"}}  icon={faInstagram} onClick={() => window.open("https://www.instagram.com/yourspacemaderight/", "_blank")} />
                        </Button>
                    </ButtonGroup>


                    
                        : <ButtonGroup>
                            <Button className="transparent btnBGH">
                                <FontAwesomeIcon className="facebook" style={{color: "white"}} size="2x" icon={faFacebook} onClick={() => window.open("https://www.facebook.com/Your-Space-Made-Right-102444671236614", "_blank")} />
                            </Button>
                            {/* <Button className="transparent btnBGH"> 
                                <FontAwesomeIcon className="pinterest" style={{color: "white"}} size="2x"  icon={faPinterest} />
                            </Button> */}
                            <Button className="transparent btnBGH">
                                <FontAwesomeIcon style={{color: "white"}} size="2x"  icon={faInstagram} />
                            </Button>
                            {/* <Button className="transparent btnBGH">
                                <FontAwesomeIcon className="youtube" style={{color: "white"}} size="2x"  icon={faYoutube} />
                            </Button> */}
                        </ButtonGroup>



        



            }
        </div>
    )
}

export default SocialButtons



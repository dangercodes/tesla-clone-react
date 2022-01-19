import React, { useState, useEffect } from 'react'
import './HeroBanner.scss'
import {Link} from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HeroBanner({ 
    keyTest,
    type,
    description,
    image,
    background, 
    useArrow, 
    numberOfButtons, 
    labelButtonPrimary, 
    labelButtonSecondary,
    transparentButton,
    linkButtonPrimary,
    linkButtonSecondary
    }) {

    const [clsTransparentButton, setClsTransparentButton] = useState("");
    const [clsNumberButton, setClsNumberButton] = useState("")

    useEffect(() => {
        const getButtonStyle = () => {
            if(transparentButton) {
                setClsTransparentButton("transparent-button");
            }else{
                setClsTransparentButton("");
            }
        }

        const getNumberButton = () => {
            if(numberOfButtons === "1") {
                setClsNumberButton("one-button");
            }else{
                setClsNumberButton("");
            }
        }

        getButtonStyle();
        getNumberButton();
    });

    return (
        <div className="hero-banner" style={{backgroundImage: "url('assets/images/HeroBanner/" + background + ".avif')"}}>
            <div className="hero-banner__content">
                <div className="hero-banner__info">
                    <div className="hero-banner__info-text">
                        <h1 data-aos="fade-in">{type}</h1>
                        {/* <h2>Order Online for <Link to="/">Touchless Delivery</Link></h2> */}
                        <h2 data-aos="fade-in">{description}</h2>
                    </div>
                </div>
                <div className={image !== "" ? "hero-banner__image-vector" : "hero-banner__image-vector hide"} data-aos="fade-in">
                    <Image src={["assets/images/HeroBanner/" + image + ".avif"]} className="img-fluid" />
                </div>
                <div className={["hero-banner__actions " + clsNumberButton + clsTransparentButton]} data-aos="fade-in">
                    <Link to={{pathname: linkButtonPrimary}}>
                        <Button variant="primary">{labelButtonPrimary}</Button>
                    </Link>
                    <Link to={{pathname: linkButtonSecondary}}>
                        <Button variant="secondary" className={numberOfButtons === "2" ? "show" : "hide"}>{labelButtonSecondary}</Button>
                    </Link>
                </div>
            </div>
            <div className={useArrow ? "hero-banner__arrow" : "hero-banner__arrow hide"}>
                <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
            </div>
        </div>
    )
}

export default HeroBanner

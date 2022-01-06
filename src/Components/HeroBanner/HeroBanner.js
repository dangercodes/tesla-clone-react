import React from 'react'
import './HeroBanner.scss'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

function HeroBanner({ type, image }) {
    return (
        <div className="hero-banner" style={{backgroundImage: "url('assets/images/heroBanner/" + image + ".avif')"}}>
            <div className="hero-banner__info">
                <div className="hero-banner__info-text">
                    <h1>{type}</h1>
                    <h2>Order Online for <Link to="/">Touchless Delivery</Link></h2>
                </div>
            </div>
            <div className="hero-banner__actions">
                <Button variant="primary">Custom Order</Button>
                <Button variant="secondary">Existing Inventory</Button>
            </div>
        </div>
    )
}

export default HeroBanner

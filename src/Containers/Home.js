import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Menu from '../Components/Menu/Menu';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={true} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="content-wrapper">
                <HeroBanner 
                    type="Model S" 
                    description={["Order Online for ", <Link to=''>Touchless Delivery</Link>]}
                    image=""
                    background="hero-banner-1" 
                    useArrow={true} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Custom Order" 
                    labelButtonSecondary="Existing Inventory"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Model Y" 
                    description={["Order Online for ", <Link to=''>Touchless Delivery</Link>]}
                    image=""
                    background="hero-banner-2" 
                    useArrow={false} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Custom Order" 
                    labelButtonSecondary="Existing Inventory"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Model 3" 
                    description={["Order Online for ", <Link to=''>Touchless Delivery</Link>]}
                    image=""
                    background="hero-banner-3" 
                    useArrow={false} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Custom Order" 
                    labelButtonSecondary="Existing Inventory"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Model X" 
                    description={["Order Online for ", <Link to=''>Touchless Delivery</Link>]}
                    image=""
                    background="hero-banner-4" 
                    useArrow={false} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Custom Order" 
                    labelButtonSecondary="Existing Inventory"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Solar Panels" 
                    description="Lowest Cost Solar Panels in America"
                    image=""
                    background="hero-banner-5" 
                    useArrow={false} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Order Now" 
                    labelButtonSecondary="Learn More"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Solar Roof" 
                    description="Produce Clean Energy From Your Roof"
                    image=""
                    background="hero-banner-6" 
                    useArrow={false} 
                    numberOfButtons="2" 
                    labelButtonPrimary="Order Now" 
                    labelButtonSecondary="Learn More"
                    transparentButton={true}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
                <HeroBanner 
                    type="Accesories" 
                    description=""
                    image=""
                    background="hero-banner-7" 
                    useArrow={false} 
                    numberOfButtons="1" 
                    labelButtonPrimary="Shop Now" 
                    labelButtonSecondary=""
                    transparentButton={false}
                    linkButtonPrimary=""
                    linkButtonSecondary=""
                />
            </div>
            <Footer />
        </div>
    )
}

export default Home

import React, { useEffect, useState } from 'react';
import Home from '@/pages/home';
import About from '@/pages/about';
import Contact from '@/pages/Contact';
import Portfolio from '@/pages/Portfolio';
import Resume from '@/pages/Resume';
import SliderBox, { Slider,GetLocation } from "@/lib/FullScroll";
import MiddleNavbar from './components/MiddleNavbar';
import Navbar from './components/Navbar';

function SinglePage() {
    const [ShowNav, setShowNav] = useState({ isShow: false });

    const handleScroll = () => {
        if (window.scrollY < GetLocation("about")-50) {
            setShowNav({ isShow: false });
        } else {
            setShowNav({ isShow: true });
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("scroll", handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [ShowNav]);

    return (
        <SliderBox>
            <MiddleNavbar />
            {ShowNav.isShow ? <Navbar /> : <></>}
            <Slider name="home" Component={Home} />
            <Slider name="about" Component={About} />
            <Slider name="resume" Component={Resume} />
            <Slider name="portfolio" Component={Portfolio} />
            <Slider name="contact" Component={Contact} />
        </SliderBox>
    );
}

export default SinglePage;

import React from 'react';
import Home from '@/pages/home';
import About from '@/pages/about';
import Contact from '@/pages/Contact';
import Portfolio from '@/pages/Portfolio';
import Resume from '@/pages/Resume';
import SliderBox, { Slider } from "@/lib/FullScroll";
import MiddleNavbar from './components/MiddleNavbar';
import Navbar from './components/Navbar';

function SinglePage() {

    return (
        <SliderBox>
            <MiddleNavbar />
            <Navbar/>
            <Slider name="home" Component={Home} />
            <Slider name="about" Component={About} />
            <Slider name="resume" Component={Resume} />
            <Slider name="portfolio" Component={Portfolio} />
            <Slider name="contact" Component={Contact} />
        </SliderBox>
    );
}

export default SinglePage;

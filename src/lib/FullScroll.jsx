import React, { useEffect } from "react";


const Slider = ({ name, Component, props = {} }) => {
    return (
        <div className="relative w-full h-full slider" id={`sliders-${name.toLowerCase()}`}>
            {<Component data={props} />}
        </div>
    );
}

const Navigate = (sliderName) => {
    const mySlider = document.getElementById(`sliders-${sliderName.toLowerCase()}`);
    if (mySlider != null) mySlider.scrollIntoView({ behavior: "smooth" });
}

const GetLocation = (sliderName)=>{
    const mySlider = document.getElementById(`sliders-${sliderName.toLowerCase()}`);
    return mySlider.offsetTop;
}


const SliderBox = (props) => {
   
    return (
        <div className="w-screen h-screen main-slide-box">
            {props.children}
        </div>
    )
}

export { Slider, Navigate,GetLocation };
export default SliderBox;

import React from "react";


const Slider = ({ name, Component, props = {} }) => {
    return (
        <div className="w-full h-full slider" id={`sliders-${name.toLowerCase()}`}>
            {<Component data={props} />}
        </div>
    );
}

const Navigate = (sliderName) => {
    const mySlider = document.getElementById(`sliders-${sliderName.toLowerCase()}`);
    if (mySlider != null) mySlider.scrollIntoView({ behavior: "smooth" });
}

const SliderBox = (props) => {
    
    return (
        <div className="w-screen h-screen">
            {props.children}
        </div>
    )
}

export { Slider, Navigate };
export default SliderBox;

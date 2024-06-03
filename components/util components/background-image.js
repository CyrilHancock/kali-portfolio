import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": "./images/wallpapers/wall-1.png",
        "wall-2": "./images/wallpapers/wall-2.png",
        "wall-3": "./images/wallpapers/wall-3.png",
        "wall-4": "./images/wallpapers/wall-4.png",
        "wall-5": "./images/wallpapers/wall-5.png",
        "wall-6": "./images/wallpapers/wall-6.webp",
        "wall-7": "./images/wallpapers/wall-7.webp",
        "wall-8": "./images/wallpapers/wall-8.webp",
    };
    return (
        <div style={{ backgroundImage: `url(${bg_images[props.img]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="absolute top-0 right-0 w-full h-full overflow-hidden bg-ubuntu-img -z-10">
        </div>
    )
}

import React from 'react';
import Clock from '../util components/clock';

export default function LockScreen(props) {

    const wallpapers = {
        "wall-1": "./images/wallpapers/wall-1.png",
        "wall-2": "./images/wallpapers/wall-2.png",
        "wall-3": "./images/wallpapers/wall-3.png",
        "wall-4": "./images/wallpapers/wall-4.png",
        "wall-5": "./images/wallpapers/wall-5.webp",
        "wall-6": "./images/wallpapers/wall-6.webp",
        "wall-7": "./images/wallpapers/wall-7.webp",
        "wall-8": "./images/wallpapers/wall-8.webp",
    };

    if (props.isLocked) {
        window.addEventListener('click', props.unLockScreen);
        window.addEventListener('keypress', props.unLockScreen);
    };

    return (
        <div id="ubuntu-lock-screen" style={{ zIndex: "100" }} className={(props.isLocked ? " visible translate-y-0 " : " invisible -translate-y-full ") + " absolute outline-none bg-black bg-opacity-90 transform duration-500 select-none top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen"}>
            <div style={{ backgroundImage: `url(${wallpapers[props.bgImgName]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="absolute top-0 left-0 z-20 w-full h-full transform blur-md "></div>
            <div className="relative z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden text-white">
                <div className=" text-7xl">
                    <Clock onlyTime={true} />
                </div>
                <div className="mt-4 text-xl font-medium">
                    <Clock onlyDay={true} />
                </div>
                <div className="mt-16 text-base ">
                    Click or Press a key to unlock
                </div>
            </div>
        </div>
    )
}

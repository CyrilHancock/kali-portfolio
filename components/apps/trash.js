import React, { Component } from 'react';
import $ from 'jquery';

export class Trash extends Component {
    constructor() {
        super();
        this.trashItems = [
            {
                name: "php",
                icon: "./themes/filetypes/php.png"
            },
            {
                name: "Angular.js",
                icon: "./themes/filetypes/js.png"
            },
            {
                name: "node_modules",
                icon: "./themes/Yaru/system/folder.png"
            },

            {
                name: "abandoned project",
                icon: "./themes/Yaru/system/folder.png"
            },
            {
                name: "OS Scheduling assignment name.zip",
                icon: "./themes/filetypes/zip.png"
            },
            {
                name: "project final",
                icon: "./themes/Yaru/system/folder.png"
            },
            {
                name: "project ultra-final",
                icon: "./themes/Yaru/system/folder.png"
            },

        ];
        this.state = {
            empty: false,
        }
    }

    componentDidMount() {
        // get user preference from local-storage
        let wasEmpty = localStorage.getItem("trash-empty");
        if (wasEmpty !== null && wasEmpty !== undefined) {
            if (wasEmpty === "true") this.setState({ empty: true });
        }
    }

    focusFile = (e) => {
        // icon
        $(e.target).children().get(0).classList.toggle("opacity-60");
        // file name
        $(e.target).children().get(1).classList.toggle("bg-ub-orange");
    }

    emptyTrash = () => {
        this.setState({ empty: true });
        localStorage.setItem("trash-empty", true);
    };

    emptyScreen = () => {
        return (
            <div className="flex flex-col items-center justify-center flex-grow">
                <img className="w-24 " src="./themes/Yaru/status/user-trash-symbolic.svg" alt="Ubuntu Trash" />
                <span className="px-1 mt-4 text-xl font-bold text-gray-400">Trash is Empty</span>
            </div>
        );
    }

    showTrashItems = () => {
        return (
            <div className="flex flex-wrap items-start content-start justify-start flex-grow ml-4 overflow-y-auto windowMainScreen">
                {
                    this.trashItems.map((item, index) => {
                        return (
                            <div key={index} tabIndex="1" onFocus={this.focusFile} onBlur={this.focusFile} className="flex flex-col items-center w-16 mx-4 my-2 text-sm outline-none">
                                <div className="flex items-center justify-center w-16 h-16">
                                    <img src={item.icon} alt="Ubuntu File Icons" />
                                </div>
                                <span className="text-center rounded px-0.5">{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div className="flex flex-col w-full h-full text-white select-none bg-ub-cool-grey">
                <div className="flex items-center justify-between w-full text-sm bg-ub-warm-grey bg-opacity-40">
                    <span className="ml-2 font-bold">Trash</span>
                    <div className="flex">
                        <div className="px-3 py-1 mx-1 my-1 text-gray-300 bg-black bg-opacity-50 border border-black rounded">Restore</div>
                        <div onClick={this.emptyTrash} className="px-3 py-1 mx-1 my-1 bg-black bg-opacity-50 border border-black rounded hover:bg-opacity-80">Empty</div>
                    </div>
                </div>
                {
                    (this.state.empty
                        ? this.emptyScreen()
                        : this.showTrashItems()
                    )
                }
            </div>
        )
    }
}

export default Trash;

export const displayTrash = () => {
    return <Trash> </Trash>;
}

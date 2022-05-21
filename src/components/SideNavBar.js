import { useState } from "react";

let styleDiv = {
    position: "absolute",
    height: "calc(100% - 64px)",
    zIndex: "10",
    backgroundColor: "white",
    boxShadow: "5px 0px 11px 2px rgba(0,0,0,0.3)",
    transition: ".3s"
}

let styleUl = {
    color: "black",
}

let visibleSideBar = {
    left: "0px"
}
let invisibleSideBar = {
    left: "-230px"
}

const SideNavBar = (props) => {
    let styleVisible = props.visible ? visibleSideBar : invisibleSideBar;

    return (
        <div style={{...styleDiv, ...styleVisible}}>
            <ul className="menu menu-compact lg:menu-normal w-56 p-2" style={styleUl}>
                <li><a href="/">Todo</a></li>
                <li><a href="/category/1">Teclados</a></li>
                <li><a href="/category/2">Mouses</a></li>
            </ul>
        </div>
    );
}

export default SideNavBar;
import { useState } from "react";
import SideNavBar from './SideNavBar';

// Componente de nav bar superior.
let styleTopNavBar = {
    color: "white",
}

const TopNavBar = (props) => {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const openModal = () => {
        setSideBarVisible(!sideBarVisible);
    };

    return (
        <>
            <nav className="navbar bg-base-100 bg-info-content" style={styleTopNavBar}>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={() => {openModal()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <button className="btn btn-ghost normal-case text-xl">{props.title}</button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </nav>
            <SideNavBar visible={sideBarVisible}></SideNavBar>
        </>
    );
}

export default TopNavBar;
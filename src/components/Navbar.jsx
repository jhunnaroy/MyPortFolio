import React from "react";

const Navbar = ()=> {
    return <>
    <div className="conatainer nav-bar"
    data-aos = "fade-down"
    data-aos-duration="1000"
    >
        <div className="left nav-items">PortFolio</div>
        <div className="righ">
            <a href="#home" className="nav-items">Home</a>
            <a href="#experience" className="nav-items">Experience</a>
            <a href="#skills" className="nav-items">Skills</a>
            <a href="#projects" className="nav-items">Projects</a>
            <a href="#contacts" className="nav-items">Contacts</a>
        </div>

    </div>
    </>
}
export default Navbar;
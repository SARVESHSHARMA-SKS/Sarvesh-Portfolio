import React from 'react'
import {Link} from "react-router-dom"
const links = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/projects",
        title: "Projects"
    },
    {
        to: "/techstack",
        title: "Tech Stack",
    }
    
]

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center"}} >
            {
                links.map(({ to, title }) => (
                    <div style={{ display: "flex",flexDirection:"column" }}>
                        <Link style={{ display: "flex", flexDirection: "column",margin:"2vw" }} smooth to={to}>{title}</Link>
                    </div>
                    
                ))
            }
        </div>
    )
}

export { Navbar }
import React, { useState } from "react";
import { FaBars, FaThList, FaUserAlt }from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarAdministrador = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/MenuAdministrador",
            name:"Perfil",
            icon:<FaUserAlt/>
        },
        {
            path:"/RegistroZonasParqueo",
            name:"Registrar Zonas Parqueo",
            icon:<FaThList/>
        },
        {
            path:"/RegistroH",
            name:"Registrar Horario",
            icon:<FaThList/>
        }
    ]

    return (
        <div className="container">
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bar">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SidebarAdministrador;
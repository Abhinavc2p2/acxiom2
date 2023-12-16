import React, { useState } from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

    // Define state for the sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the sidebar's visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // logout function
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/login");
    };


    const vendor = [{
            name: "Home",
            path: "/",
            icon: "fa-solid fa-house",
        },
        {
            name: "Appointments",
            path: "/doctor-appointments",
            icon: "fa-solid fa-list",
        },
        {
            name: "Profile",
            path: `/doctor/profile/${user?._id}`,
            icon: "fa-solid fa-user",
        },
    ];

    const SidebarMenu = user && user.isAdmin ? adminMenu : user && user.isDoctor ? vendor : userMenu;

    return ( <
        >
        <
        div className = { `main ${sidebarOpen ? "sidebar-open" : ""}` } >
        <
        div className = "main" >
        <
        div className = "layout rowLayout" >
        <
        div className = "sidebar" >
        <
        div className = "logo" >
        <
        h6 className = "text-black bold" > Event Managment < /h6> <
        hr / >
        <
        /div>

        <
        div className = "menu" > {
            SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return ( <
                    div key = { menu.name }
                    className = { `menu-item ${isActive && "active"}` } >
                    <
                    i className = { menu.icon } > < /i> <
                    Link to = { menu.path } > { menu.name } < /Link> < /
                    div >
                );
            })
        } <
        div className = { `menu-item` }
        onClick = { handleLogout } >
        <
        Link to = "/login" > Logout < /Link> < /
        div > <
        /div> < /
        div >

        <
        div className = "content" >
        <
        div className = "header" >
        <
        button className = "toggle-sidebar"
        onClick = { toggleSidebar } >
        <
        /button>

        <
        div className = "welcome" > < span className = "wel" > Event Management < /span> Acxiom consulting private Limited</div >
        <
        div className = "header-content"
        style = {
            { cursor: "pointer" }
        } >
        <
        Badge count = { user && user.notifcation.length }
        onClick = {
            () => navigate("/notification")
        } >
        <
        i className = "fa-solid fa-bell" > < /i> < /
        Badge > <
        Link to = "/profile" > { user && user.name } < /Link> < /
        div > <
        /div> <
        div className = "body" > { children } < /div> < /
        div > <
        /div> < /
        div > <
        /div> < / >
    );
};

export default Layout;
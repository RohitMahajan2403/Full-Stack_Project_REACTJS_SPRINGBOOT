// TutorSidebar.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TutSidebarData } from "./TutSidebarData";
import TutSubMenu from "./TutSubmenu";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = styled.div`
    background: #FFCF96;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #FFFEC4;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const TutorSidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <IconContext.Provider value={{ color: "red" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "#FC5404",
                        }}
                    >
                        FluentFusion
                    </h1>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {TutSidebarData.map((item, index) => (
                            <TutSubMenu item={item} key={index} />
                        ))}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </div>
    );
};

export default TutorSidebar;

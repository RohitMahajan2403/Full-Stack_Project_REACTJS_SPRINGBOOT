import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Home",
        path: "/student/home",
        icon: <FaIcons.FaHome />,
    },
    {
        title: "Profile",
        path: "/student/profile",
        icon: <FaIcons.FaUser />,
    },
    {
        title: "Schedule",
        path: "/student/studschedule",
        icon: <FaIcons.FaClock />,
    },
    {
        title: "Activity",
        path: "/student/studlanguages",
        icon: <FaIcons.FaUser />,
    },
    {
        title: "About Us",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Our Team",
                path: "/student/about-us/team",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Vision",
                path: "/student/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },

    {
        title: "Contact",
        path: "/student/contact",
        icon: <FaIcons.FaPhone />,
    },
    
 
    {
        
        title: "Setting",
        path: "/student/setting",
        icon: <FaIcons.FaCog />,
    },
];
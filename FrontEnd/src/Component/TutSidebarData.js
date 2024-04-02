import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const TutSidebarData = [
    {
        title: "Profile",
        path: "/tutor/profile",
        icon: <FaIcons.FaUser />,
    },
    {
        title: "All Uploads",
        path: "/tutor/tutuploads",
        icon: <FaIcons.FaCloudUploadAlt />,
    },
    {
        title: "Schedule",
        path: "/tutor/tutschedule",
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
                path: "/tutor/about-us/team",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Vision",
                path: "/tutor/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Feedback",
        path: "/tutor/contact",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Settings",
        path: "/tutor/setting",
        icon: <FaIcons.FaCog />,
    },
    {
        title:"Add Course",
        path: "/tutor/addcourse",
        icon: <FaIcons.FaCog />,
    }
];
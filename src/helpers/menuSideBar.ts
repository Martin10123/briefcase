import { AiOutlineHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { BiSolidUserDetail } from "react-icons/bi";

export const menuSideBar = [
    {
        title: "Home",
        icon: AiOutlineHome,
        linkTo: "/",
    },
    {
        title: "About",
        icon: FaUserAlt,
        linkTo: "/about",
    },
    {
        title: "Skills",
        icon: GiSkills,
        linkTo: "/skills",
    },
    {
        title: "Projects",
        icon: PiProjectorScreenChartDuotone,
        linkTo: "/works",
    },
    {
        title: "Contact",
        icon: BiSolidUserDetail,
        linkTo: "/contact",
    },
];

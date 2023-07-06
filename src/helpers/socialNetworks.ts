import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
    gmailIcon,
    instagramIcon,
    linkedinIcon,
    whatsAppIcon,
} from "../assets";

export const socialNetworks = [
    { title: "Gmail", linkTo: "https://mail.google.com/mail/?view=cm&to=martinsimarra4@gmail.com", icon: gmailIcon },
    { title: "Instagram", linkTo: "https://www.instagram.com/martinelias1012/", icon: instagramIcon },
    { title: "Linkedin", linkTo: "https://www.linkedin.com/in/martin-elias-83038b22b/", icon: linkedinIcon },
    { title: "WhatsApp", linkTo: "https://wa.me/3006830624", icon: whatsAppIcon },
]

export const socialNetworksMain = [
    { title: "Gmail", linkTo: "https://mail.google.com/mail/?view=cm&to=martinsimarra4@gmail.com", icon: SiGmail },
    { title: "Instagram", linkTo: "https://www.instagram.com/martinelias1012/", icon: BsInstagram },
    { title: "Linkedin", linkTo: "https://www.linkedin.com/in/martin-elias-83038b22b/", icon: BiLogoLinkedin },
    { title: "WhatsApp", linkTo: "https://wa.me/3006830624", icon: BsWhatsapp },
    { title: "Facebook", linkTo: "https://www.facebook.com/Martin101206", icon: FaFacebook },
]
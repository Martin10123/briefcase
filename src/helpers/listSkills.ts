import { FaJava, FaReact } from "react-icons/fa";
import {
    css,
    firebase,
    github,
    html,
    java,
    javascript,
    react,
    typescript,
} from "../assets";
import { BiLogoCss3, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";

export const listSkills = [
    {
        name: "CSS",
        icon: BiLogoCss3,
        image: css,
        linkTo: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
        name: "Firebase",
        icon: BiLogoFirebase,
        image: firebase,
        linkTo: "https://firebase.google.com/?hl=es",
    },
    {
        name: "Github",
        icon: AiFillGithub,
        image: github,
        linkTo: "https://github.com/",
    },
    {
        name: "HTML",
        icon: AiFillHtml5,
        image: html,
        linkTo: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
        name: "Java",
        icon: FaJava,
        image: java,
        linkTo: "https://www.java.com/es/",
    },
    {
        name: "Javascript",
        icon: RiJavascriptFill,
        image: javascript,
        linkTo: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
        name: "React-native",
        icon: FaReact,
        image: react,
        linkTo: "https://reactnative.dev/",
    },
    {
        name: "ReactJs",
        icon: FaReact,
        image: react,
        linkTo: "https://es.react.dev/",
    },
    {
        name: "Typescript",
        icon: BiLogoTypescript,
        image: typescript,
        linkTo: "https://www.typescriptlang.org/",
    },
];

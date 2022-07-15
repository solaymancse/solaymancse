import { BiCodeBlock,BiCodeCurly } from 'react-icons/bi'
import { FaUserGraduate,FaLaptopCode } from 'react-icons/fa'
import { MdOutlineSentimentVerySatisfied } from 'react-icons/md'
import { GoBrowser } from 'react-icons/go'
import { ImDatabase } from 'react-icons/im'
import { BsCartCheck } from 'react-icons/bs'
import img1 from "./assets/p1.png"
import img2 from "./assets/p2.png"
import img3 from './assets/profile.jpg'
import img4 from './assets/profile1.jpg'
import img5 from './assets/p3.png'
export const compareData = [
    {
        icon: <BiCodeBlock/>,
        title: "Completed Project",
        start:"1",
        end: "25"
    },
    {
        icon: <FaUserGraduate/>,
        title: "Experience",
        start:"1",
        end: "2"
    },
    {
        icon: <MdOutlineSentimentVerySatisfied/>,
        title: "Client Review",
        start:"1",
        end: "25"
    },
    {
        icon: <BiCodeCurly/>,
        title: "Competitive Programming",
        start:"1",
        end: "25"
    },
];

export const projectData = [

    {
        img: `${img1}`,
        title: "Hophycare",
        code: [ "react","node","express","mongoDB"],
        live: "/",
        source:"/"
    },

    {
        img: `${img2}`,
        
        title: "Bank System",
        code: [ "react","node","express","mongoDB"],
        live: "/",
        source:"/"
    },

    {
        img: `${img5}`,
        title: "Grocery Store Website",
        code: [ "react","node","express","mongoDB"],
        live: "/",
        source:"/"
    }
];

export const serviceData = [
    {
        icon: <GoBrowser/>,
        title: "Front-End Design",
        h2: ["React","Bootstrap","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
    {
        icon: <FaLaptopCode/>,
        title: "Back-End Design",
        h2: ["Node","Express","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
    {
        icon: <FaLaptopCode/>,
        title: "Full Stack Website",
        h2: ["React","Bootstrap","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
    {
        icon: <FaLaptopCode/>,
        title: "Convert XD,PSD,Html",
        h2: ["React","Bootstrap","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
    {
        icon: <ImDatabase/>,
        title: "Database Design",
        h2: ["React","Bootstrap","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
    {
        icon: <BsCartCheck/>,
        title: "E-Commerce Funcionalities",
        h2: ["React","Bootstrap","Responsive"],
        desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"


    },
];

export const reviewData = [
    {
        img:`${img3}`,
        desc:" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
    },
    {
        img:`${img4}`,
        desc:" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
    },
    {
        img:`${img3}`,
        desc:" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
    }

];

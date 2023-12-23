import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { PiGraduationCap } from "react-icons/pi";
import { GrBook } from "react-icons/gr";
export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Courses",
        path: '/courses'
    },
    {
        name: "About us",
        path: '/Aboutus'
    },
    {
        name: "Contact",
        path: '/contact'
        
    },
]
export const Aboutus = [
    {
        id:1,
        title: 'Course',
        icon: GrBook,
        sol: '40+',
    },
    {
        id:1,
        title: 'Student',
        icon: PiGraduationCap,
        sol: '40+',
    },
    
] 
export const contactData= [
    {
        id:1,
        title: 'Email Us',
        icon: MdOutlineEmail,
        contact: 'academy@beeplus.com',
    },
    {
        id:1,
        title: 'Call Us',
        icon: BsTelephone,
        contact: '0393947639',
    },
    {
        id:1,
        title: 'Location',
        icon: SlLocationPin,
        contact: 'Ho Chi Minh City, Thu Duc, Vietnam',
    }
]


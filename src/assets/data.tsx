import {FaGolang, FaJs} from "react-icons/fa6";
import {TbBrandCSharp} from "react-icons/tb";

const data = {
    user: {
        name: "Gewinum",
        avatar: "https://avatars.githubusercontent.com/u/78866820?v=4",
        shortBio: "Software Developer & IT Undergraduate",
        linkedIn: "https://www.linkedin.com/in/nikoloz-durglishvili/",
        github: "https://github.com/Gewinum",
    },
    skills: [
        {
            icon: <FaJs className="js-icon" />,
            content: "Skilled in creating dynamic and interactive web applications using JavaScript, with expertise in modern frameworks, libraries, and ES6+ features",
        },
        {
            icon: <TbBrandCSharp className="csharp-icon" />,
            content: "Proficient in building robust and scalable applications using C#, with experience in object-oriented programming, backend development, and frameworks like ASP.NET"
        },
        {
            icon: <FaGolang className="golang-icon" />,
            content: "Experienced in developing efficient and high-performance applications using Go, with expertise in concurrency, microservices architecture, and building scalable backend systems"
        }
    ]
};

export default data;
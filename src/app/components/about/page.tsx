import Image from "next/image"
import AboutImage from "../images/about.png"
export default function About() {
    return (
         <div className="container">
            <div className="info-div">
                <h1> About me </h1>
            <p> I am a frontend developer with a passion for building responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful designs. <br />
            Currently I am a student in the GIAIC program, where I am focusing on enhancing my skills in NextJS. My goal is to continuously improve my coding practices and problem-solving abilities, which are essential for becoming a better developer.</p>
            </div>
            <div className='image-div w-screen' 
            
            >
            <Image src={AboutImage} alt="About" />
            </div>
        </div>
    )
}


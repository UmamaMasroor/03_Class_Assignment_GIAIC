import Link from 'next/link'
import Image from "next/image"
import HeroImage from "../images/hero.png"
export default function Hero(){
    return(
        <div className='container'>
            <div className='info-div'>
                <h1>
                    Hey, <br />
                    I am <span>Umama Masroor Ali</span> <br />
                    Frontend Developer
                </h1>
                <p>Web developer & designer specializing in building amazing websites.</p>
                <button><Link href={"https://github.com/UmamaMasroor?tab=repositories"}> See Projects</Link></button>
            </div>

            <div className='image-div'>
            <Image src={HeroImage} alt="Hero" />
            </div>
        </div>
    )
}
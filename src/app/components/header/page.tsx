import Link from "next/link";
export default function header(){
    return (
        <div className="header">
           <ul className="header-links">
           <Link href={"/"}><li>Portfolio</li></Link>
           <Link href={"/components/about"}><li>About </li></Link>
            <Link href={"/components/contact"}><li>Contact </li></Link>
           </ul>
        </div>
    );
}
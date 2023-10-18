import styles from "./Crew.module.css"
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import victorImg from "../../assets/image-victor-glover.webp"
import anoushehImg from "../../assets/image-anousheh-ansari.webp"
import douglasImg from "../../assets/image-douglas-hurley.webp"
import markImg from "../../assets/image-mark-shuttleworth.webp"
import { NavLink } from "react-router-dom";
const Crew = () => {
    const params = useParams()

    let name,
        height,
        width,
        image,
        title,
        about;
        
    if (!params.name) {
        name ="douglas-hurley"
    }else {
        name = params.name.toLocaleLowerCase()
    }

    if (name === "douglas-hurley") {
        width = "177.123px"
        height = "222px"
        image = douglasImg
        title = "Commander"
        about = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."    
    } else if (name === "mark-shuttleworth") {
        width = "153.92px"
        height = "222px"
        image = markImg
        title = "Mission Specialist"
        about = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    } else if (name === "victor-glover") {
        width = "226.147px"
        height = "223px"
        image = victorImg
        title = "PILOT"
        about = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    } else if (name === "anousheh-ansari") {
        width = "177.123px"
        height = "222px"
        image = anoushehImg
        title = "Flight Engineer"
        about = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    }

    const handleClick = () => {
        if(document.getElementsByClassName("opacity-1").length > 0) {
            document.getElementsByClassName("opacity-1")[0].classList.remove("opacity-1")
        }
    }

    useEffect(() => {
        if(name === "douglas-hurley") {
            document.getElementById("defaultLink").classList.add("opacity-1")
        }
    }, [])

    return (
        <div id="crew" className={styles.crew}>
            <div className="wrapper">
                <Header />
                <h2 className={styles.header}><span>02</span>Meet your crew</h2>
                <div className={styles.imageWrapper}>
                    <img src={image} style={{height: height, width: width,}} alt="" />
                </div>
                <nav className={styles.nav}>
                    <NavLink id="defaultLink" onClick={handleClick} to="/crew/douglas-hurley" className={styles.navLink}></NavLink>
                    <NavLink onClick={handleClick} to="/crew/mark-shuttleworth" className={styles.navLink}></NavLink>
                    <NavLink onClick={handleClick} to="/crew/victor-glover" className={styles.navLink}></NavLink>
                    <NavLink onClick={handleClick} to="/crew/anousheh-ansari" className={styles.navLink}></NavLink>
                </nav>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.name}>{name.split("-").join("")}</h4>
                <p className={styles.about}>{about}</p> 
            </div>
        </div>
    )
}

export default Crew;
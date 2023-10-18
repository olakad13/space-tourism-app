import styles from "./Technology.module.css"
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import launchVehicleImg from "../../assets/image-launch-vehicle-landscape.jpg"
import spacesportImg from "../../assets/image-spaceport-landscape.jpg"
import spaceCapsuleImg from "../../assets/image-space-capsule-landscape.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const Technology = () => {
    const params = useParams()

    let name,
        image,
        about;

    if (!params.name) {
        name ="launch-vehicle"
        
    }else {
        name = params.name.toLocaleLowerCase()
    }

    if (name === "launch-vehicle") {
        image = launchVehicleImg
        about = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    } else if (name === "spacesport") {
        image = spacesportImg
        about = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."

    } else if (name === "space-capsule") {
        image = spaceCapsuleImg
        about = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

    }

    useEffect(() => {
        if (name === "launch-vehicle") {
            document.getElementById("defaultLink").classList.add("white-bg")
        }

        
    },[])
    
    const handleClick = () => {
        if (document.getElementsByClassName("white-bg").length > 0) {
            document.getElementsByClassName("white-bg")[0].classList.remove("white-bg")
        }
    }
    return (
        <div id="technology" className={styles.technology}>
            <div className="wrapper">
                <Header />
                <div className={styles.header}>
                    <span>03</span>
                    SPACE LAUNCH 101
                </div>
            </div>

            <div className={styles.hero}>
                <img src={image} alt="" className={styles.heroImg} />
            </div>
            <div className="wrapper">
                <nav id="navContainer" className={styles.nav}>
                    <NavLink to="/technology/launch-vehicle" onClick={handleClick} id="defaultLink" className="navLink">1</NavLink>
                    <NavLink to="/technology/spacesport" onClick={handleClick} className="navLink">2</NavLink>
                    <NavLink to="/technology/space-capsule" onClick={handleClick} className="navLink">3</NavLink>
                </nav>
                <h2>THE TERMINOLOGY…</h2>
                <h3 className={styles.name}>{name.split("-").join(" ")}</h3>
                <p className={styles.about}>{about}</p>
            </div>

        </div>
    )
}

export default Technology;
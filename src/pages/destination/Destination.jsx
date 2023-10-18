import styles from "./Destination.module.css"
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import moonImg from "../../assets/image-moon.png"
import marsImg from "../../assets/image-mars.png"
import titanImg from "../../assets/image-titan.png"
import europaImg from "../../assets/image-europa.png"
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


const Destination = () => {
    const params = useParams();
    let destination,
        image,
        index,
        about,
        avgDistance,
        travelTime;

    if (!params.name) {
        destination = "moon"
        
    } else {
        destination = params.name.toLocaleLowerCase()
    }


    if (destination === "moon") {
        
        image = moonImg
        about = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        avgDistance = "384,400 km"
        travelTime = "3 days"
    } else if (destination === "mars") {
        image = marsImg
        about = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!"
        avgDistance = "225 MIL. km"
        travelTime = "9 months"

    } else if (destination === "europa") {
        image = europaImg
        about = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        avgDistance = "628 MIL. km"
        travelTime = "3 years"

    } else if (destination === "titan") {
        image = titanImg
        about = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        avgDistance = "1.6 BIL. km"
        travelTime = "7 years"

    };

    index = "01"

    const handleClick = () => {
        if(document.getElementsByClassName("white-bottom-border").length > 0) {
            document.getElementsByClassName("white-bottom-border")[0].classList.remove("white-bottom-border")
        }
    }
    useEffect(() => {
        if (destination === "moon") {
            document.getElementById("defaultLink").classList.add("white-bottom-border")
        }
    },[])

    
    return (
        <div id="destination" className={styles.destination} >
            <div className="wrapper">
               <Header /> 
                <h2 className={styles.header}><span>{index}</span>Pick your destination</h2>
                <div className={styles.imageWrapper}>
                    <img src={image} alt="" />
                </div>

                <nav className={styles.nav}>
                    <NavLink onClick={handleClick} className="navLink" to="/destination/moon" id="defaultLink">MOON</NavLink>
                    <NavLink onClick={handleClick} className="navLink" to="/destination/mars">MARS</NavLink>
                    <NavLink onClick={handleClick} className="navLink" to="/destination/europa">EUROPA</NavLink>
                    <NavLink onClick={handleClick} className="navLink" to="/destination/titan">TITAN</NavLink>
                </nav>

                <h3 className={styles.name}>{destination.toLocaleUpperCase()}</h3>
                <p className={styles.infoParagraph}>{about}</p>

                <div className={styles.info}>
                    <div className={styles.avgDistance}>
                        <p>AVG. DISTANCE</p>
                        <h4>{avgDistance}</h4>
                    </div>
                    <div className={styles.travelTime}>
                        <p>Est. travel time</p>
                        <h4>{travelTime}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;
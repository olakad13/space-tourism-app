import styles from "./Home.module.css"
import Header from "../../components/Header/Header.jsx"
import Hero from "../../components/Hero/Hero"
import Explore from "../../components/Explore/Explore"


const Home = () => {
    return (
        <div className={styles.home}>
            <div className="wrapper">
            <Header />
            <Hero />
            <Explore />    
            </div>
        </div>
    )
}

export default Home;
import styles from "./Hero.module.css"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <h2>
                SO, YOU WANT TO TRAVEL TO
            </h2>
            <h3>
                SPACE
            </h3>
            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer 
                space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
                give you a truly out of this world experience!
            </p>
        </section>
    )
}

export default Hero;
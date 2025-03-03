export default function AboutMe() {
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.jpg" alt="About me"/>
            </div>
            <div className="hero--section-content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section--description">I’m a passionate software engineer who thrives on turning complex challenges into innovative solutions. With a strong academic foundation—holding a Master’s in Computer Science from the University of Houston and a Bachelor’s in Computer Engineering from Pune—I bring both rigorous technical knowledge and practical industry experience to every project.</p>
                    <p className="hero--section--description">I’m proficient in Python and JavaScript, with hands-on expertise in React JS for building dynamic user interfaces. I have a deep understanding of REST API design and implementation, and I believe in Test Driven Development to ensure code quality and reliability. My skill set extends to robust SQL database management, and I have actively applied Machine Learning and AI techniques to develop intelligent, data-driven solutions that drive impactful business outcomes.</p>
                    <p className="hero--section--description">Whether developing scalable web applications, automating critical processes, or pioneering AI-driven projects, I’m committed to delivering excellence and innovation. Let’s build something extraordinary together.</p>
                </div>
            </div>
        </section>
    )
}
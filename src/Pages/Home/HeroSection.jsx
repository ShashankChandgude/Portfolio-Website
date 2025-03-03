export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Shashank</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                         Software  
                        </span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                    I build innovative software solutions that streamline processes and empower users.
                    <br />
                    transforming ideas into seamless, interactive experiences that drive change.
                    </p>
                </div>
                <button className="btn btn-primary" onClick={() => window.open("https://www.linkedin.com/in/shashank-chandgude/", "_blank")}>Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section"/>
            </div>
        </section>
    );
}
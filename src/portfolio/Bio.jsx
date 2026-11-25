function Bio(){
    return(
        <>
        <div className="bio-container">
        <div className="skills-container">
            <div className="skill-1">
                <h5>Frontend Developer</h5>
            </div>
            <div className="skill-2">
                <h5>Logistics . Finance . Payments</h5>
            </div>
            <div className="skill-3">
                <h5>React . JavaScript . Figma . GitHub</h5>
            </div>
        </div>

        <div className="bio-header">
            <h1 className="bio-header-text">
                Tobi E. Finesse &mdash; <span>Frontend Developer</span> 
            </h1>
        </div>
        <div className="bio-credit">
            <p className="credit">I build fast, clean web apps and websites 
            using React. I focus on making interfaces that look good, a 
            smooth user experience and work well on any device, from landing pages and 
            portfolios to fully developed web apps.</p>
        </div>

        <a href="#contact">
        <div className="bio-contact">
            <h5 className="contact-me">Contact Me</h5>
        </div>            
        </a>

        <div className="last-credit-container">
            <div className="credit-1">
                <h5> Production launches</h5>
                <p>4 web apps on deploying level.</p>
            </div>
            <div className="credit-2">
                <h5>Based in Edo state, Nigeria</h5>
                <p>Open to remote jobs & Global.</p>
            </div>
        </div>
        </div>
        <div id="about"></div>
        <br/>
        <br />
        <div className="about-bio-container">
            <h2>About</h2>
            <p>I'm a frontend developer focused on building clean, responsive web
               apps and websites using React. I love turning ideas into real interfaces
               that are fast, easy to use, and look good on any device, from landing pages
               and portfolios to full interactive web apps 
            </p>
            <div className="about-comment-container">
            <div className="location">
                <h5>Edo state, Nigeria</h5>
            </div>
            <div className="tool">
                <h5>React . JavScript . Figma . GitHub</h5>
            </div>
            </div>
        </div>

        <div className="comment-container">
            <div className="focus-container">
                <p className="focus">Focus</p>
                <h5 className="focus-heading">Design-Driven Frontend</h5>
                <p className="p-1">
                    clean layouts, responsive pages, and smooth user experiences. I
                    use my eye for design from Architecture to build React websites that
                    are well structured, easy to navigate, and sharp on every screen. 
                </p>
            </div>
            <div className="tooling-container">
                <p className="tooling">Tooling</p>
                <h5 className="tooling-heading">Built for Building</h5>
                <p className="p-2">React, JavaScript, HTML, CSS, Vite, Figma,
                    Sketchup, AutoCAD. </p>
            </div>
            <div className="edu-container">
                <p className="edu">Education</p>
                <h5 className="edu-heading">Ahmadu Bello University, Zaria</h5>
                <p className="p-3">
                    B.Sc.Architecture (undergraduate). Combining design, structure, and
                    creativity with modern frontend development.  
                </p>
            </div>
        </div>
        </>
    )
}


export default Bio 
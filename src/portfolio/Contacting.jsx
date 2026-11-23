import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

function Contacting(){
    return(
        <>
    <div className="contact-help-container">
       <div className="cont-2">
                <div className="build-something">
                <h3>Let's build something exceptional</h3>
                <p>
                    I'm open to Frontend Developer roles,
                    internships, and collaborations with
                    startups and tech companies - remote
                    onsite. I build fast, responsive, and
                    user-friendly web experiences with React.
                    <br />
                    Have an idea, a project, or just a design
                    in your head?    
                    <br />
                    <br />
                    <b>
                     Let's turn it into something real.   
                    </b>
                    <br />
                    whether it's a landing page for your 
                    business, a portfoilio to show your 
                    work, or a full website/web-app for your startup,
                    I will help you build it clean, fast and
                    beautiful. 
                </p>
            <div className="lets-connect-container">
                <h3 id="contact">Let's connect</h3>
                <p className="last-p">
                  I respond as fast as possible. Prefer Whatsapp? 
                  Use the direct link below to contact me.
                </p>
                <a href="https://wa.me/2349126475414" target='_blank'>
                <div className="whatsapp-cont">
                    <div className="whatsapp-connect">
                        <FaWhatsapp/>
                    </div>
                    <h5> Whatsapp</h5>
                </div>  
                </a>

                <a href="https://github.com/oluwatobi-joseph" target='_blank'>
                <div className="github-cont">
                    <div className="github-connect">
                        <FaGithub/>
                    </div>
                    <h5> GitHub</h5>
                </div>
                </a>
                
                <a href="https://www.linkedin.com/in/tobi-finesse" target='_blank'>
                <div className="linkedin-cont">
                    <div className="linkedin-connect">
                        <FaLinkedinIn/>
                    </div>
                    <h5>LinkedIn</h5>
                </div>    
                </a>
                
            </div>                
    </div>
        </div> 

        </div>
        </>
    )
}

export default Contacting
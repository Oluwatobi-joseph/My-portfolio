import { useState } from "react"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTimes } from 'react-icons/fa'


function PortNav(){

    const [sidebar, setsidebar]= useState(false)
    const menubar = (
        <div className="side-bar">
            <div className="back" id="back" onClick={()=>blureffect()}>
                <h5 onClick={()=>setsidebar(sidebar)}>
                <FaTimes/>
                </h5>
            </div>
            
            <div className="sidebar-container">
                <a href="#about">
                    <div className="sidebar-about">
                       <h3>About</h3>
                    </div>
                </a>

                <div className="sidebar-contact">
                        <a href="#contact">
                            <h3>Contact</h3>
                        </a>
                </div>

                <div className="sidebar-icons">
                    <a href="https://wa.me/2349126475414 " target='_blank'>
                    <div className="icon-1">
                        <h3><FaWhatsapp/></h3></div>
                    </a>
                    <a href="https://github.com/oluwatobi-joseph" target='_blank'>
                    <div className="icon-2">
                        <h3><FaGithub/></h3></div>
                    </a>
                    <a href="https://www.linkedin.com/in/tobi-finesse" target='_blank'>
                    <div className="icon-3">
                        <h3><FaLinkedinIn/></h3></div>
                    </a>
                </div>
            </div>
    </div>)

    function blureffect(){
        document.querySelector('body').classList.toggle('open')
        document.querySelector('back').classList.remove('open')
    }
return(
        <>
        <div className="sidebar-overlay"></div>
        <div className="nav-menu"
               onClick={()=>{setsidebar(!sidebar)}}>
                <h4 className="nav-menu-text" onClick={()=>blureffect()}>
                    Menu
                </h4>
                 {sidebar? menubar : "" }
               </div>
        <nav className="top-nav">
            <div className="top-nav-container">
                <div className="nav-1">

                <a href="#">
                <h4 className="nav-text">
                    Tobi E. Finesse
                </h4> 
                </a>

                </div>

                <div className="nav-container-2">
               <div className="about-container">
                <a href="#about">
                    <h5 className="about">About</h5>
                </a>
               </div>
               <div className="contact-container">
                <a href="#contact">
                    <h5 className="contact">Contact</h5>
                </a>
               </div>
                </div>

            </div>
            <div className="social-cont">
             
             <a href="https://wa.me/2349126475414 " target='_blank'>
             <div className="whatsapp"><FaWhatsapp/></div>
             </a>  

            <a href="https://github.com/oluwatobi-joseph" target='_blank'>
            <div className="github"><FaGithub/></div>
            </a>

            <a href="https://www.linkedin.com/in/tobi-finesse" target='_blank'>
            <div className="linkedin"><FaLinkedinIn/></div> 
            </a>
            </div>
           
        </nav>
        
        </>
    )
}


export default PortNav 
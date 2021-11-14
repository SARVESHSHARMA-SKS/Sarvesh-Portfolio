import React from 'react'
import styles from "./BasicInfo.module.css"
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
    // const handle=()=>{
    //     window.open("https://drive.google.com/drive/folders/1rxbO4m_xu3o9xuUSZCqHp55x8eg8qGTk?usp=sharing")
    // }
    return (
        <div className={styles.contact}>
        
            <h1>CONTACT ME</h1>
            
            <div className={styles.contact__info}>
                <div>
                    <span><i class="fas fa-map-marker" style={{color:"aquamarine"}}></i></span>
                    <span> <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="location" />
                        <span> <img className={styles.ricons}src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="img" /></span>
                    </span>  <span>Munger,Bihar,India</span>
                </div>
                <div>
                    <span><i class="fas fa-phone" style={{color:"aquamarine"}}></i></span>
                       <span> <img  className={styles.ricons} src="https://cdn-icons-png.flaticon.com/512/15/15874.png" alt ="img"/></span> <span>+919113763003</span>
                </div>
                <div>
                    <span><i class="fas fa-envelope" style={{color:"aquamarine"}}></i></span>
                    <span>< img className={styles.ricons} src="https://cdn-icons-png.flaticon.com/512/1782/1782765.png" alt ="img"/></span> <span>sssarvesh1999@gmail.com</span>
                </div>
               
            </div>
            <div className={styles.linkedin__class}>
                <a href="https://www.linkedin.com/in/sarveshkumarsharma-sks/" target="_blank" rel="noopener noreferrer">
                   <SiLinkedin className={styles.lgicons} />
                    {/* <img src="https://sudhirportfolio.netlify.app/assets/img/Social/facebook.png" alt="likedin"/> */}
                </a>
                <a href="https://github.com/SARVESHSHARMA-SKS" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.lgicons} />
                    {/* <img src="https://sudhirportfolio.netlify.app/assets/img/Social/github.png" alt="github"/> */}
                </a>
            </div>
            {/* <hr/> */}
            <br />
            <br/>
            
        </div>
    )
}

export default Contact;
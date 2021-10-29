import React from 'react'
import styles from "./BasicInfo.module.css"
const BasicInfo = () => {
    const handle=()=>{
        window.open("https://drive.google.com/file/d/1N15QIJuUdjj52tjowsAC_m_BnRc8CDwI/view?usp=sharing")
    }
    return (
        <div className={styles.outer__div}>
            <h1>SARVESH KUMAR SHARMA</h1>
            <h2>FULL STACK DEVELOPER</h2>
            <button onClick={handle}>Resume</button>
            <div className={styles.contact__info}>
                <div>
                    <span><i class="fas fa-map-marker" style={{color:"aquamarine"}}></i></span>
                  <span> <img  className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="location"/> </span>  <span>Munger,Bihar,India</span>
                </div>
                <div>
                    <span><i class="fas fa-phone" style={{color:"aquamarine"}}></i></span>
                    <span>+91 9113763003</span>
                </div>
                <div>
                    <span><i class="fas fa-envelope" style={{color:"aquamarine"}}></i></span>
                   <span>sssarvesh1999@gmail.com</span> 
                </div>
               
            </div>
            <div className={styles.linkedin__class}>
                <a href="https://www.linkedin.com/in/sarveshkumarsharma-sks/" target="_blank" rel="noopener noreferrer">
                    <img src="https://sudhirportfolio.netlify.app/assets/img/Social/facebook.png" alt="likedin"/>
                </a>
                <a href="https://github.com/SARVESHSHARMA-SKS" target="_blank" rel="noopener noreferrer">
                    <img src="https://sudhirportfolio.netlify.app/assets/img/Social/github.png" alt="github"/>
                </a>
            </div>
            <hr/>
            
        </div>
    )
}

export default BasicInfo;
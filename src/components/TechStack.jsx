import React from 'react'
import styles from "./TechStack.module.css"
const TechStack = () => {
    return (
        <div>
            <h2 style={{textAlign:"center",color:"#5E5757"}}>TECH STACK</h2>
            <div className={styles.tech__stack}>
                <div>
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"  alt="nodejs" />
                    <p>NodeJS</p>
                    
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" alt="mongoDB"/>
                    <p>MongoDB</p>
                </div>
                <div>
                    <img src={`/logo192.png`} alt="react" />
                    <p>ReactJS</p>
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="js" />
                    <p>Javascript</p>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1835/1835942.png" alt="aws" />
                    <p>Aws</p>
                </div>
                <div>
                    <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="HTML" />
                    <p>HTML</p>
        
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src="https://image.flaticon.com/icons/png/128/2857/2857406.png" alt="data" />
                    <p>Data Structures</p>
                </div>



            </div>
        </div>
    )
}

export default TechStack
import React from 'react'
import styles from "./Proficiencies.module.css"
const Proficiencies = () => {
    return (
        <>
        
        <div className={styles.outer__div}>
        <hr/>
            <h1 style={{textAlign:"center",color:"#5E5757"}}>PROFICIENCY</h1>
                <div className={styles.tech__stack}>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/128/2857/2857406.png" alt="data" />
                        <p>Data Structures</p>
                    </div>
                    <div>
                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"  alt="nodejs" />
                        <p>NodeJS</p>
                    
                    </div>
               
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/1183/premium/1183672.png?token=exp=1634216841~hmac=d096d767e8e5692f1f7754823717d54d" alt="react" />
                        <p>ReactJS</p>
                    </div>
                
                    <div>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/aws-1869025-1583149.png" alt="aws" />
                        <p>Aws</p>
                    </div>
                    

            </div>
        </div>
        <hr/>
        </>
    )
}

export default Proficiencies
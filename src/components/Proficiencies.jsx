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
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--bLwP4QRs--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/z0gf53sy2i9u3cofqt30.png" alt="react" />
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
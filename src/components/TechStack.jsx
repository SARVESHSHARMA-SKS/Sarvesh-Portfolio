import React from 'react'
import styles from "./TechStack.module.css"
import { SiJavascript, SiHtml5, SiCss3, SiExpress, SiMongodb, SiMysql, SiGit } from 'react-icons/si'
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';
import { FaAws } from "react-icons/fa";
import { MdOutlineSync } from "react-icons/md";
import { SiNpm } from "react-icons/si";







import {FaReact, FaNodeJs} from 'react-icons/fa'
const TechStack = () => {
    return (
        <div>
            <h1 style={{textAlign:"center",color:"#5E5757"}}>TECH STACK</h1>
            <div className={styles.tech__stack}>
                <div >
                    <FaNodeJs />

                    {/* <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"  alt="nodejs" /> */}
                    <p>NodeJS</p> 
                    
                </div>
                <div>
                    <SiMongodb  style={{width:"10vw",height:"10vh"}}/>
                    {/* <img src="https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" alt="mongoDB"/> */}
                    <p>MongoDB</p>
                </div>
                <div> 
                    <FaReact style={{width:"10vw",height:"10vh"}}/>
                    {/* <img src={`/logo192.png`} alt="react" /> */}
                    <p>ReactJS</p>
                </div>
                <div>
                    <SiJavascript style={{width:"10vw",height:"10vh"}} />
                    {/* <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="js" /> */}
                    <p>Javascript</p>
                </div>
                <div style={{ color: "black" }}>
                    <FaAws style={{width:"10vw",height:"10vh"}} />

                    {/* <AWSIcon  /> */}

                    {/* <img src="https://cdn-icons-png.flaticon.com/512/1835/1835942.png" alt="aws" /> */}
                    <p>Aws</p>
                </div>
                <div>
                    <SiHtml5 style={{width:"10vw",height:"10vh"}} />
                    {/* <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="HTML" /> */}
                    <p>HTML</p>
        
                </div>
                <div>
                    <SiCss3 style={{width:"10vw",height:"10vh"}} />
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS" /> */}
                    <p>CSS</p>
                </div>
                <div>
                    <MdOutlineSync style={{width:"10vw",height:"10vh"}} />

                    {/* <img src="https://image.flaticon.com/icons/png/128/2857/2857406.png" alt="data" /> */}
                    <p>Data Structures</p>
                </div>
                <div><SiExpress style={{ width: "10vw", height: "10vh" }} />
                    <p>Express</p>
                </div>
                <div>
                    <SiMysql  style={{width:"10vw",height:"10vh"}} />
                    {/* <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="HTML" /> */}
                    <p>MySql</p>
        
                </div>
                <div>
                    <SiGit  style={{width:"10vw",height:"10vh"}} />
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS" /> */}
                    <p>Git</p>
                </div>
                <div>
                    <SiNpm style={{width:"10vw",height:"10vh"}} />

                    {/* <img src="https://image.flaticon.com/icons/png/128/2857/2857406.png" alt="data" /> */}
                    <p>Npm</p>
                </div>



            </div>
        </div>
    )
}

export default TechStack
import React from 'react'
import styles from "./About.module.css"
const About = () => {
    return (
        <>
        <div className={styles.outer__div}>
            <h1  style={{textAlign:"center",marginTop:"30px",  color:"#5E5757"}}>ABOUT ME</h1>
           <div style={{textAlign:"justify",fontSize:"22px",fontWeight:"normal",margin:"0 10vw"}}>
                    An Enthusiastic Full Stack Developer moulded  and shaped by masai school's rigorous training program ,
                    with a passion for problem solving and to work upon new ideas.Possessing a knack to learn new technologies and to integrate them forming meaningful projects.
                    Strong in ReactJS, Data Structures, Algorithm, Operating System, C, C++, Javascript, HTML, CSS , NodeJS, MongoDB, ExpressJS, mySQL.
                   Good in Core Computer Science Subjects Like Computer Network,DBMS,Operating System. Challenges and new problem exite me to the core.
               Passionately looking to start a career as a software developer.Always ready to adapt to new situations.
           </div>
            
        </div>
        <hr/>
        </>
    )
}

export default About;
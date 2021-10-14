import React from 'react'
import styles from "./GitStatus.module.css"
const GitStatus = () => {
    return (
        <div className={styles.outer__div}>
            <h1 style={{textAlign:"center",color:"#5E5757"}}>GIT STATUS</h1>
            <img src="https://i.postimg.cc/vH3sV7Xh/0-0-0-0-0-0-0-Git-activity-3.png" alt="img"/>
        </div>
    )
}

export default GitStatus
import React from 'react'
import styles from "./GitStatus.module.css";
// import GitInfo from 'react-git-info/macro';
import GitHubCalendar from 'react-github-calendar';

 


const GitStatus = () => {
    // const gitInfo = GitInfo();
    return (
        <div className={styles.outer__div}>
            <h1 style={{textAlign:"center",color:"#5E5757"}}>GIT STATUS</h1>
            {/* <img src="https://i.postimg.cc/vH3sV7Xh/0-0-0-0-0-0-0-Git-activity-3.png" alt="img" /> */}
            {/* <p>{gitInfo.commit.}</p> */}
              <GitHubCalendar style={{margin:"auto"}} username="SARVESHSHARMA-SKS" />

        </div>
    )
}

export default GitStatus
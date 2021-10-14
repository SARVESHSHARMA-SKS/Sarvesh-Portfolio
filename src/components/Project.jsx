import React from 'react'
import styles from "./Project.module.css"
const Projects = () => {
    

    return (
       

        <>
        <h1 style={{textAlign:"center",marginTop:"30px",  color:"#5E5757"}}>PROJECTS</h1>
        <div className={styles.outer__div }>
            <div>
                <img src="https://i.postimg.cc/rpwMHBmq/landingpagesst-1.png"  alt="makemytrip"/>
                <h3>Clone of MakeMyTrip</h3>
                <p>MakeMyTrip is an Indian online travel company founded in 2000.Headquartered in Gurugram, Haryana, the company provides online travel services including flight tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets</p>
                <a href="https://github.com/nitish14920/MakeMyTrip" target="_blank" rel="noopener noreferrer" >
                  <button>Github</button>
                </a>
                <a href="https://i.postimg.cc/rpwMHBmq/landingpagesst-1.png" target="_blank" rel="noopener noreferrer">
                    <button>Demo</button>
                </a>
                </div>
                
            <div>
                <img src="https://i.postimg.cc/bvjrCyDW/0-0-0-0-1-Document-Google-Chrome-28-08-2021-09-13-39.png"  alt="Couch"/>
                <h3>Clone of InternShala</h3>
                <p>Internshala is an internship and online training platform, based in Gurgaon, India.Founded by Sarvesh Agrawal, an IIT Madras alumnus, in 2011, the website helps students find internships with organisations in India</p>

              
               <a href="https://github.com/SrikanthReddyBV/Internshala" target="_blank" rel="noopener noreferrer">
                {/* <span><i class="fab fa-github fa-2x"></i></span> */}
              <button>Github</button>
                </a>
               
                
                <a  href="https://i.postimg.cc/bvjrCyDW/0-0-0-0-1-Document-Google-Chrome-28-08-2021-09-13-39.png" target="_blank" rel="noopener noreferrer">
                    
                    <button>Demo</button></a>   
            </div>
           
        </div>
        </>
    )
}

export default Projects

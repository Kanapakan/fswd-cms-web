import React from 'react'
// import PostContent from "../pages/posts/index"
import styles from "../styles/Comment.module.css";
function Home() {
  
    return (
      <div className="container">
      {/* <p> {parse(post.content.rendered)}</p> */}
      <div className={styles.detail_con}>
        <div className={styles.post_content}>
            <div className="center-home-content">
              <h1 style={{fontSize: "32px"}}>Welcome to My CMS Website!</h1>
              <h3>Created By </h3>
              <h3>Kanapa Kanwiwat</h3>
              <p>This Website is part of the Full-Stack Web Developer course</p>
            </div>
        </div>




         
      </div>
    </div>
    );
  }

export default Home;
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
              <h1 style={{fontSize: "32px"}}>Welcome to the
DigitalOcean Community!</h1>
            </div>
        </div>

        <div className={styles.comment_header}>
          <h1>Comment Below</h1>
        </div>


         
      </div>
    </div>
    );
  }

export default Home;
import React from 'react'
// import PostContent from "../pages/posts/index"
import styles from "../styles/Comment.module.css";
function TitleCard({title, color}) {
  
    return (
      <div >
      {/* <p> {parse(post.content.rendered)}</p> */}


        <div className={styles.title_header_all} style={{backgroundColor:color}}>
          <h1>{title}</h1>
 
      </div>
    </div>
    );
  }

export default TitleCard;
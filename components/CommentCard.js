import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import Paper from '@mui/material/Paper';
import moment from 'moment'

const CommentCard = ({ postId }) => {
  console.log(postId);
  const [ments, setMents] = useState(null);

  useEffect(() => {
    async function fetchComments(id) {
      let res = await fetch(
        // `https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=${id}&orderby=date&per_page=100`
        `https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=${id}`
      );
      res = await res.json();
      setMents(res);
    }
    fetchComments(postId);
  }, [postId]);

  console.log("comments", ments);

  return (


      <Box
        
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: '100%',
            height: 128,
          },
        }}
      >
        {ments?.map((item, i) => (
        <Paper elevation={0} key={i} >
           <div className="post-comments" >
            <div className="comment-author">
            <CardHeader
                sx={{paddingTop: 2}}
                  
                  avatar={
                    <Avatar  aria-label="recipe"  />

                  }
                  title= {item.author_name}
                  subheader= {moment(item.date).format("LLL")}
                />
            </div>
            <div className="comment-content" style={{ paddingLeft: 15 }}>
            <span dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
          </div>
        </Paper>
        ))}  
      </Box>
    
      


  );
};

export default CommentCard;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import moment from "moment";
import styles from "../styles/Comment.module.css";

const CommentCard = ({ postId, reload }) => {
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
  }, [postId,reload]);


  return (
    <>
    <div
        className={styles.comment_header}
      >
        <h1>Comment</h1>
      </div>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          mt: '15px',
          width: "100%",
        },
      }}
    >
      

      {ments?.map((item, i) => (
        <Paper elevation={0} key={i}>
          <div className={styles.post_comments}>
            <div className="comment-author">
              <CardHeader
                sx={{ paddingTop: 2, paddingBottom: 1}}
                avatar={<Avatar aria-label="recipe" />}
                title={item.author_name}
                subheader={moment(item.date).format("LLL")}
              />
            </div>
            <div className={styles.comment_content}>
              <span
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </div>
          </div>
        </Paper>
      ))}
    </Box>
    </>
  );
};

export default CommentCard;

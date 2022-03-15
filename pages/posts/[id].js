import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CommentCard from "../../components/CommentCard";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../../styles/Comment.module.css";
import moment from "moment";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/" + context.params.id
  );
  const data = await res.json();
  const userRes = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users/" + data.author);
  const user = await userRes.json();
  const categoryRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/categories"
  );
  const category = await categoryRes.json();
  return {
    props: { post: data, 
      users: user, 
      categories: category },
  };
};
const PostDetails = ({ post, users, categories }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reloadMent, setReloadMent] = useState(false);
 
  console.log(users);

  const submitPost = async ({ name, comment }) => {
    const response = await fetch(
      "https://fswd-wp.devnss.com/wp-json/wp/v2/comments",
      {
        method: "POST",
        body: JSON.stringify({
          post: post.id,
          author_name: name,
          content: comment,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ZnN3ZDpmc3dkLWNtcw==",
        },
      }
    );
    // const data = await response.json();
    setName("");
    setComment("");
    setReloadMent(!reloadMent);
    alert("Your Comment was sent!");
  };
  return (
    <div className="container">
      {/* <p> {parse(post.content.rendered)}</p> */}
      <div className={styles.detail_con}>
        <div className={styles.post_content}>
          <h1>{post.title.rendered}</h1>
          <hr />
          <div className="author-area" style={{ textAlign: "left" }}>
            <p style={{fontSize: "20px", margin:"0px"}} >Published on {moment(post.date).format("LLL")}</p>
            <Link href={"/author/" + users.id}>
              <a>
                <p className={styles.author_link}style={{fontSize: "22px", margin:"0px"}}>{users.name}</p>
              </a>
            </Link>
            
          </div>

          <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>

        <div className={styles.comment_header}>
          <h1>Leave a Comment</h1>
        </div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: "100%",
            },
          }}
        >
          <div className={styles.post_comment_form_con}>
            <div className={styles.post_comment_form}>
              <Stack
                component="form"
                sx={{
                  width: "100%",
                }}
                spacing={1}
                noValidate
                autoComplete="off"
              >
                <h3 style={{ color: "black", marginBottom: "0px" }}>Name</h3>
                <TextField
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <h3 style={{ color: "black", marginBottom: "0px" }}>Comment</h3>
                <TextField
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Stack>
              <Button
                sx={{ mt: "20px" }}
                variant="contained"
                size="large"
                onClick={() => submitPost({ name, comment })}
              >
                Post Comment
              </Button>
            </div>
          </div>
        </Box>

        <CommentCard postId={post.id} reload={reloadMent} />
      </div>
    </div>
  );
};

export default PostDetails;

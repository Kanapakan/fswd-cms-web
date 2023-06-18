import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CommentCard, Loading } from "../../components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../../styles/Comment.module.css";
import moment from "moment";
import Link from "next/link";
import { getPostDetails, getPosts, getUserDetails } from "../../services";
import { useRouter } from "next/router";

const PostDetails = ({ post, user }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reloadMent, setReloadMent] = useState(false);

  console.log(post.title.rendered);


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
            <div className=" text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // className="h-6 w-6 inline mr-2 text-pink-500"
                style={{ color: "rgb(138, 174, 207)", width: "30px", verticalAlign: "middle" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle" style={{ marginLeft: "5px"}}>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
            <Link href={"/author/" + post.author.id}>
              <a>
                <p
                  className={styles.author_link}
                  style={{ fontSize: "22px", margin: "0px" }}
                >
                  {user.name}
                </p>
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

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.id);
  const userData = await getUserDetails(data.author);
  return {
    props: {
      post: data,
      user: userData,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

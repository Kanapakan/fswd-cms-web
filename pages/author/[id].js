import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthorCard from "../../components/AuthorCard"

export const getServerSideProps = async (context) => {
  const userRes = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users/"+ context.params.id);
  const user = await userRes.json();
  const postRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed"
  );
  const post = await postRes.json();

  return {
    props: {
      posts: post,
      users: user,

    },
  };
};
const AuthorPage = ({posts, users}) => {

  const lightTheme = createTheme({ palette: { mode: "light" } });
  
  return (
<div className="container">

      
        <Grid container sx={{  marginTop: '5rem'}} justifyContent="center">
          <Grid item>
            <ThemeProvider theme={lightTheme}>
            <h1>Author</h1>
              {/* <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  gridTemplateColumns: { md: "1fr" },
                }}
              > */}
                <AuthorCard posts={posts} users={users} />
                {/* <PostCard posts={tagArr} users={users} tags={tags} /> */}
              {/* </Box> */}
            </ThemeProvider>
          </Grid>
        </Grid>

      </div>

  );
};

export default AuthorPage;

import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const getServerSideProps = async () => {
  const userRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
  const user = await userRes.json()
  const postRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed')
  const post = await postRes.json()
  const categoryRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
  const category = await categoryRes.json()

  return {
      props: {
          posts: post,
          users: user,
          categories: category,
          // catalogId: context.query.id == null ? 0 : context.query.id,
      }
  }
}

function PostContent({posts, users, categories}) {

  const lightTheme = createTheme({ palette: { mode: "light" } });
  return (
    <div className="post-container">
      <Grid container justifyContent="center">
        <Grid item>
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                display: "grid",
                gap: 5,
                gridTemplateColumns: { md: "1fr 1fr 1fr" },
              }}
            >
              {/* {posts.map((post) => ( */}
              <PostCard posts={posts} users={users} categories={categories}/>
              {/* ))} */}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostContent;

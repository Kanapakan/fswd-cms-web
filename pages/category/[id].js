import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TitleCard from "../../components/TitleCard";

export const getServerSideProps = async (context) => {
  const userRes = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users");
  const user = await userRes.json();
  const postRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed"
  );
  const post = await postRes.json();
  const categoryRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/categories"
  );
  const category = await categoryRes.json();
  const cateName = context.params.id;
  return {
    props: {
      posts: post,
      users: user,
      categories: category,
      cateName: cateName,
    },
  };
};
const CategoryType = ({ posts, users, categories, cateName }) => {
  const lightTheme = createTheme({ palette: { mode: "light" } });
  let cate = [];

  {
    posts.map((post, i) =>
      categories.map((cat) => {
        if (
          post.categories.find((p) => p === cat.id) &&
          cat.name === cateName
        ) {
          console.log(post, cat.name);
          cate.push(post);
        }
      })
    );
  }

  return (
<div className="post-container">

        
        <Grid container sx={{  marginTop: '5rem'}} justifyContent="center">
          <Grid item>
            <ThemeProvider theme={lightTheme}>
            <TitleCard title={cateName} />
              <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  gridTemplateColumns: { md: "1fr 1fr 1fr" },
                }}
              >
                <PostCard posts={cate} users={users} categories={categories} />
              </Box>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>

  );
};

export default CategoryType;

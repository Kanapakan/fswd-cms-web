import React, { useState } from "react";
import { PostCard, TitleCard } from "../../components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const getServerSideProps = async (context) => {
  const userRes = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users");
  const user = await userRes.json();
  const postRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed"
  );
  const post = await postRes.json();
  const tagsRes = await fetch(
    "https://fswd-wp.devnss.com/wp-json/wp/v2/tags"
  );
  const tag = await tagsRes.json();
  const tagName = context.params.id;
  return {
    props: {
      posts: post,
      users: user,
      tags: tag,
      tagName: tagName,
    },
  };
};
const TagTypes = ({ posts, users, tags, tagName }) => {
    // console.log(tags, tagName )
  const lightTheme = createTheme({ palette: { mode: "light" } });
  let tagArr = [];

  {
    posts.map((post, i) =>
      tags.map((tag) => {
        if (
          post.tags.find((t) => t === tag.id) &&
          tag.name === tagName
        ) {
          console.log(post, tag.name);
          tagArr.push(post);
        }
      })
    );
  }

  return (
<div className="post-container">
      
      
        <Grid container sx={{  marginTop: '5rem'}} justifyContent="center">
          <Grid item>
            <ThemeProvider theme={lightTheme}>
            
            <TitleCard title={tagName} />
              <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  gridTemplateColumns: { md: "1fr 1fr 1fr" },
                }}
              >
                <PostCard posts={tagArr} users={users} tags={tags} />
              </Box>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>

  );
};

export default TagTypes;

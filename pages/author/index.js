import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthorCard from "../../components/AuthorCard";
import TitleCard from "../../components/TitleCard";

export const getServerSideProps = async () => {
  const userRes = await fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users");
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
const AuthorAll = ({ posts, users }) => {
  const lightTheme = createTheme({ palette: { mode: "light" } });

  return (
    <div className="container">
      <Grid container sx={{ marginTop: "5rem" }} justifyContent="center">
        <Grid item>
          <ThemeProvider theme={lightTheme}>
            <TitleCard title={"Author"} />
            <Box
              sx={{
                display: "grid",
                gap: 5,
                gridTemplateColumns: { md: "1fr 1fr " },
              }}
            >
              {users.map((user, i) => (
                <AuthorCard key={i} posts={posts} users={user} />
              ))}
            </Box>

            {/* <PostCard posts={tagArr} users={users} tags={tags} /> */}
            {/* </Box> */}
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthorAll;

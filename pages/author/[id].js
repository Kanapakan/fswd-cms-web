import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthorCard from "../../components/AuthorCard"
import TitleCard from "../../components/TitleCard";

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

  let postArr = [];
  let lenArr;

  
  posts.map((post, i) => {
    if (post.author == users.id) {
      // console.log(post, user.name);
      // if(post._embedded['wp:featuredmedia']){
        {postArr.push(post)}
      // }
    }
  }
  )

  lenArr = postArr.length

  console.log(lenArr)

  const lightTheme = createTheme({ palette: { mode: "light" } });
  
  return (
<div className="container">


      
        <Grid container sx={{  marginTop: '5rem'}} justifyContent="center">
          <Grid item>
            <ThemeProvider theme={lightTheme}>
            <TitleCard title={"Author"} />

                <AuthorCard posts={posts} users={users} />
                <TitleCard title={lenArr+" Posts"} />
                <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  gridTemplateColumns: { md: "1fr 1fr 1fr" },
                }}
              >

              </Box>
                {/* <PostCard posts={postArr} users={users} /> */}
              {/* </Box> */}
            </ThemeProvider>
          </Grid>
        </Grid>

      </div>

  );
};

export default AuthorPage;

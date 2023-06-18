import React, { useEffect, useState } from "react";
import { PostCard, TitleCard } from "../../components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getPosts, getUsers, getCategories } from "../../services";


function PostContent() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
    })

    getUsers().then((result) => {
      setUsers(result);
    })

    getCategories().then((result) => {
      setCategories(result);
    })

  }, [])

  const lightTheme = createTheme({ palette: { mode: "light" } });
  
  return (
    <div className="post-container">
      <Grid container sx={{  marginTop: '5rem'}} justifyContent="center">
        <Grid item>
          <ThemeProvider theme={lightTheme}>
            <TitleCard title={"All Posts"} color={"darkgray"}/>

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

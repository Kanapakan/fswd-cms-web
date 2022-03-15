import React, { Component } from "react";
// import parse from 'html-react-parser';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import moment from 'moment'
import Link from "next/link";

const PostCard = ({ posts, users, catagories }) => {
  console.log(catagories)

  return (
    <>
      {posts?.map((post, i) => (
        <Card key={i} sx={{ maxWidth: 345, minHeight: 350, borderRadius: '24px'}} elevation={0}>
          <Link href={'/posts/' + post.id} key={i}>
            <a>
          <CardMedia
          sx={{borderRadius:'0px'}}
            component="img"
            height='250px'
            width="100%"
            
            image={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
          />
          <CardContent sx={{ height: 90, flexGrow: 1 }}>
            <h6 style={{margin: "0px"}}>{post.title.rendered}</h6>

              

          </CardContent>
          </a>
          </Link>
          {users.map((user, i) => {
            if (user.id == post.author) {
              return (
                <CardHeader
                sx={{paddingTop: 2}}
                  key={i}
                  avatar={
                    <Avatar aria-label="recipe" src={post._embedded['author'][0].avatar_urls[24]}  />

                  }
                  title={user.name}
                  subheader={moment(post.date).format("LLL")}
                />
              );
            }
          })}
        </Card>
      ))}
    </>
  );
};

export default PostCard;

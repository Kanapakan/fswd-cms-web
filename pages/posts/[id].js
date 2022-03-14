import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import CommentCard from "../../components/CommentCard"


// export const getStaticPaths = async () => {
//   const postRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed')
//   const posts = await postRes.json();

//   const paths = posts.map(post => {
//     return {
//        params: {id: post.id.toString()}
//     } 
//   })
//     return {
//       paths,
//       fallback: false
//     }
// }

export const getServerSideProps = async (context) => {
  //  const id = context.params.id;
   const res = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/' + context.params.id);
   const data = await res.json();
  //  console.log(context.params.id);
   return {
     props: { post: data}
   }
}
const PostDetails = ({post}) => {
  // console.log(post)
  return (
    <div className="container">
      
      {/* <p> {parse(post.content.rendered)}</p> */}
      <div className="detail_con">
        <div className="post_content">
        <h2>{post.title.rendered}</h2>
          <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
        <div className="post_comment_form" >
          <h3>Leave Comments</h3>
          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField label="fullWidth"  />
    </Box>
            <CommentCard postId={post.id}/>
            

        </div>
      </div>
      
    </div>
  );
};


export default PostDetails;

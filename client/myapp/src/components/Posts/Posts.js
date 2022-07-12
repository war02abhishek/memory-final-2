// import React from "react";
// import Post from "./Post/Post";
// function Posts() {
//   return (
//     <div>
//       <h1>Posts</h1>
//       <Post />
//       <Post />
//       <Post />
//     </div>
//   );
// }

// export default Posts;

import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  // const {posts} = useSelector((state) => state.posts); //apne store se lelo aur print karlo
  const classes = useStyles(); //why state.posts as their is posts in 'index.js of reducers'

  const { posts,isLoading} = useSelector((state) => state.posts);
  console.log(posts);
  console.log(isLoading);
  // console.log(Object.keys(posts).length);
  
// if (!Object.keys(posts).length && !isLoading) return "No posts";
if (!posts.length && !isLoading) return "No posts";



  // return  isLoading===true ? (
  //   <CircularProgress color="primary" /> //loading ..
  // ) : 
  // (
  //   <Grid
  //     className={classes.container}
  //     container
  //     alignItems="stretch"
  //     spacing={3}
  //   >
  //     {posts.map((post) => (
  //       <Grid key={post._id} item xs={12} sm={6} md={6} lg={4}>
  //         <Post post={post} setCurrentId={setCurrentId} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );
    return isLoading ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    );
};

export default Posts;

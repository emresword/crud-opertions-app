import React from 'react';
import Post from './Post';

function PostList({ posts,deletePost,updatePost }) {
  return (
    <div > 
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} updatePost={updatePost}/>
      ))}
    </div>
  );
}

export default PostList;

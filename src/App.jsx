import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'
import Navi from './navi/Navi'

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const deletePost = (postId) => {
   setPosts([...posts.filter((post)=>post.id!==postId)])//we delete post with filter method and add ones which are not equal id
  }
  const updatePost = (postId,updatedContent) => {
    setPosts(posts.map((post) =>
      post.id === postId ? { ...post, content: updatedContent } : post
    ))
    
   }

  return (
    <div>
      <Navi/>
      <div  style={{ marginBottom: '20px' }}>
        <PostCreate createPost={createPost} />
      </div>
      <div >
        <PostList posts={posts} deletePost={deletePost} updatePost={updatePost}/>
      </div>





    </div>
  )
}

export default App

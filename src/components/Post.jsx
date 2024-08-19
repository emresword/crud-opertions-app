import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Post({ post ,deletePost,updatePost}) {
    const{id,content}=post
    const[newPost,setNewPost]=useState(content)//actual value
    const[editable,setEditable]=useState(false)

    const removePost=()=>{
        deletePost(id)

    }
    const editPost=()=>{
        updatePost(id,newPost)
        setEditable(false)

    }
    
    return (
        <div style={{ marginBottom: '10px' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>

                    {editable ?
                   ( <TextField value={newPost} onChange={(e)=>setNewPost(e.target.value)} />)
                    
                  :   (<TextField 
                  value={content} 
                  fullWidth
                  InputProps={{
                      readOnly: true,
                  }} 
                  variant="outlined" 
              />)}
                   
                </CardContent>
                <CardActions>
                    <Button onClick={removePost} size="small">Delete</Button>
                    {editable ? (<Button onClick={editPost} size="small">Confirm Updated Text</Button>): (<Button onClick={()=>{setEditable(true)}} size="small">Update</Button>)}

                    

                </CardActions>
            </Card>
        </div>
    );
}

export default Post;

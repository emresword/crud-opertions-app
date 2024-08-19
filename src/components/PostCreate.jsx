import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function PostCreate({createPost} ) {

    const [newPost,setNewPost]=useState('')

    const addPostInText=(event)=>{
        setNewPost(event.target.value)
    }
    const clearPostText=()=>{
        setNewPost("")
    }


    const add=()=>{
        if(!newPost){
            return
        }
        

        const request={
            id:(Math.random()*9999999999),
            content:newPost
        }
        createPost(request)
        clearPostText()

    }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>

                <CardContent>

                    <TextField value={newPost} onChange={addPostInText} placeholder="post text :" />
                </CardContent>
                <CardActions>
                    <Button onClick={add} size="small">Add</Button>

                </CardActions>
            </Card>
        </div>
    )
}

export default PostCreate
import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase'
const Feed = () => {

    const [ posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
console.log(comments)
  



    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
        })
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
        {posts.map(post => (
            <Post 
            id={post.id}
            key={post.id}
            profilePic={post.data.profilePic}
            timestamp={post.data.timestamp}
            message={post.data.message}
            username={post.data.username}
            image ={post.data.image}
            />
            
        ))}
        </div>
    )
}

export default Feed

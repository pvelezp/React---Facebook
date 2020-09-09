import React, {useState, useEffect, useRef} from 'react'
import './Post.css'
import { actionTypes } from './reducer'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'
import LikeOptions from './LikeOptions';
import DropdownPost from './DropdownPost';


const Post = ({id,profilePic, image, username,timestamp, message}) => {
    const [comment, setComment] = useState('')
    const [ comments, setComments] = useState([])
    const [{isDark,user, likesPost}, dispatch] =useStateValue()
    const [toggleLike, setToggleLike] = useState(false)
    const inputRef = useRef()
    const [editOrDelete, setEditOrDelete] = useState(false)
    
    const [reaction, setReaction] = useState(false)
    const [likeComment, setLikeComment] = useState(false)
    useEffect(() => {
        
        if(id) {
            db
            .collection('posts')
            .doc(id)
            .collection('comments')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()))
            })
        }

       
    },[comments])




    const likePost = (id) => {
        setToggleLike(prevState => !prevState)
        dispatch({
            type:actionTypes.ADD_LIKE,
            payload: toggleLike,
            id,
            
        })
    }


    const postComment = e => {
       e.preventDefault()
       
       db.collection('posts').doc(id).collection('comments').add({
           comment,
           username: user.displayName,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
       })
       setComment('')
    }
    return (
        <div className={isDark ? 'post__darkmode': "post"}>
            <div className="post__top">
                <Avatar
                src={profilePic}
                className="post__avatar"
                />
                <div className="post__topInfo">
    <h3>{username}</h3>
    <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>

            <div className="post__bottom">
    <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>
        {reaction && <LikeOptions 
        className="likeoptions"
        />}
            <div className="post__options">
                <div
                onMouseOver={()=>setReaction(!reaction)}
                className={toggleLike ? 'post__option toggleLike' : "post__option"}>
                    <ThumbUpIcon
                    
                    />
                    <p>Like</p>
    <p>{likesPost}</p>
                </div>
                <div 
                onClick={() =>inputRef.current.focus()}
                className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
   
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>

            <div className="post__comments">
                {comments.map(comment => (
                    <div
                    key={comment.timestamp}
                    >
                        <div className="post__comment">
                    <div className="post__commentTop">
                    <div className="post__commentRight">
                            <Avatar />
                            </div>
                        <div className="post__commentCenter">
                        <strong>{comment.username}</strong> 
                     <p>{comment.comment}</p>  
                        </div>
                        
                        <MoreHorizIcon 
                        
                        onClick={() => setEditOrDelete(!editOrDelete)}
                        />
                        {editOrDelete && <DropdownPost />}
                        </div>
                        
                        <div className="post__commentBottom">
                            <p
                            style={{color: likeComment ? 'red' : undefined}}
                            onClick={() => setLikeComment(!likeComment)}
                            >Me gusta </p>
                            <small>•</small>
                            <p>Responder </p>
                            <small>•</small>
                            <h6>11 min</h6>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            <form className="post__commentBox">
                <Avatar />
                <input type="text"
                className="post__input"
                placeholder="Add a comment..."
                value={comment}
                ref={inputRef}
                onChange={e => setComment(e.target.value)}
                />
                <button
                className="post__button"
                disabled={!comment}
                type="submit"
                onClick={postComment}
                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post

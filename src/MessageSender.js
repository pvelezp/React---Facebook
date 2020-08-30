import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import './MessageSender.css'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { useStateValue } from './StateProvider';
import db,{storage} from './firebase';
import firebase from 'firebase'
import Picker from 'emoji-picker-react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Videocam from '@material-ui/icons/Videocam';

const MessageSender = () => {
    const [appear, setAppear] = useState(false)
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const [videos, setVideos] = useState('')

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
      };

    const handleSubmit = e => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username: user.displayName,
            image: image
        })
        setInput('')
        setImage('')
    }

    const  handleCapture = ({ target }) => {
        const name = target.accept.includes('image') ? 'images' : 'videos';
        if(target.files[0]) {
            if(name === 'images'){
            setImage(target.files[0])}
            else if(name==='videos'){
                setVideos(target.files[0])
            }
        }
    };

    const handleUpload = e => {
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                console.log(snapshot)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            () => {
               storage.ref('images').child(image.name).getDownloadURL()
               .then(url => {
                   db.collection('posts').add({
                       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                       image: url,
                       message: input,
                       username: user.displayName
                   })
               })
            }
        )
        setInput('')
        setImage('')
    }

    return (

        
        <div className="messageSender">
           <div className="messageSender__top">
            <Avatar
            src={user.photoURL}
            />  
            <form  className="messageSender__topForm"
            onSubmit={handleUpload}
            >
                <input
                className="messageSender__input"
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text"
                placeholder={`What's on your mind? ${user.displayName}`}
                />
                
                <>
                <input
                    accept="image/*"
                    style={{display:'none'}}
                    id="icon-button-photo"
                    onChange={handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>

                <input
                    accept="video/*"
                    capture="camcorder"
                    onChange={handleCapture}
                    id="icon-button-video"
                    style={{display:'none'}}
                    type="file"
                />
                <label htmlFor="icon-button-video">
                    <IconButton color="primary" component="span">
                        <Videocam />
                    </IconButton>
                </label>
            </>
            <button
            style={{display:'none'}}
            type="submit"
            >Add</button>

                </form> 
            </div> 

            <div>
            {chosenEmoji?.emoji}
            </div>
            <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon
                style={{color: 'red'}}
                />
                <h3>Live Video</h3>
            </div>

            <div className="messageSender__option"
            
            >
                <input
                    accept="image/*,video/*"
                    capture="camcorder"
                    onChange={handleCapture}
                    id="icon-button-imagevideo"
                    style={{display:'none'}}
                    type="file"
                />
                <label htmlFor="icon-button-imagevideo"
                style={{display: 'flex',
                 cursor:'pointer', 
                 fontSize:"13px",
                 color:'gray',
                 alignItems: 'center'
                
                }}
                >
                <PhotoLibraryIcon
                style={{color: 'green'}}
                />
                <h3>Photo/Video</h3>
                </label>
            </div>

            <div 
            onClick={e => setAppear(appear => !appear)}
            className="messageSender__option">
                <InsertEmoticonIcon
                style={{color:' orange'}}
                
                />
                <h3>Feeling/Activity</h3>
            </div>
            </div>
<div
style={{display:'flex', justifyContent:'flex-end'}}
>
{appear && <Picker 
                        onEmojiClick={onEmojiClick} /> }
</div>
      
        </div>
    )
}

export default MessageSender

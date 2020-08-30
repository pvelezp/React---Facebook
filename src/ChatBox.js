import React from 'react'
import './ChatBox.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsIcon from '@material-ui/icons/Settings';
import ClearIcon from '@material-ui/icons/Clear';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const ChatBox = () => {
    return (
        <div className="ChatBox">
        <div className="ChatBox__header">
            <div className="ChatBox__headerLeft">
        <Avatar
        className="ChatBox__headerLeft__Avatar"
        src='https://i.pinimg.com/originals/06/0a/31/060a31c4eb5e25a91e59acf91d67ddd4.jpg'
        /> 
        <p>•</p>
        <div className='ChatBox__headerLeftName'>
            <h3>John Lennon</h3>
            <p>Activo(a) ahora</p>
        </div>
            </div>
            <div className="ChatBox__headerRight">
              <VideocamIcon />
              <PhoneIcon />
              <SettingsIcon />
              <ClearIcon />
            </div>
            </div>
        <div className="ChatBox__body">
           
        </div>

        <div className="ChatBox__footer">
            <div className="ChatBox__footerInput">
                <input
                placeholder="Escribe un mensaje..."
                type="text"/>
            </div>
            <div className="ChatBox__footerIcons">
        <div className="ChatBox__footerIconsLeft">
        <AddPhotoAlternateIcon />
<GifIcon />
<EmojiEmotionsIcon />
<AttachFileIcon />
<PhotoCameraIcon />
        </div>

        <div className="ChatBox__footerIconsRight">
        <ThumbUpAltIcon />
        </div>

            </div>
        </div>
        
    </div>
    )
}

export default ChatBox

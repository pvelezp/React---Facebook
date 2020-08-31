import React from 'react'
import './LikeOptions.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const LikeOptions = () => {
    return (
        <div className="likeOptions">
            <ThumbUpAltIcon className="like" />
            <FavoriteIcon className="love" />
            <SentimentVerySatisfiedIcon className="satisfy" />

        </div>
    )
}

export default LikeOptions

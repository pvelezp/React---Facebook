import React,{useEffect} from 'react'
import './ProfilePage.css'
import { InsertPhotoIcon } from '@material-ui/icons/InsertPhoto';
import { SettingsIcon } from '@material-ui/icons/Settings';
import { actionTypes } from './reducer'
import Intro from './Intro';
import MessageSender from './MessageSender';
import Post from './Post';
import ProfilePhotos from './ProfilePhotos';
import ProfileFriends from './ProfileFriends';
import { useStateValue } from './StateProvider';
import { auth, provider} from './firebase'

const ProfilePage = () => {

    const [{user, isDark}, dispatch] = useStateValue()

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authUser
                })

                if(authUser.displayName) {

                }
            }else {
               
            }
        })

        return () => {
            //clenaup
            unsubscribe()
        }
    }, [user])


    return (
        <div className="profilepage">
            <div className="profilepage__Banner">
                <img src="https://img.point.pet/images/12473529633_eca14113fe_k-5a932272303713003754f375.jpg" alt="a"/>
                
                <div className="profilepage__photo">
                    <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-1/p240x240/94701682_10157039435105233_1091959473246830592_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_eui2=AeHhOLQSAlSVtHPt77Ad5uLTMZFj1qfpUNQxkWPWp-lQ1BWUfHzMANOC55EFhNLxRsU&_nc_ohc=5A6Xpp6qUagAX-lmF6E&_nc_ht=scontent.flim11-1.fna&tp=6&oh=a9eaeefc678c23a3d617b89250dcb47a&oe=5F749D1F" alt="bb"/>
                    

                </div>
                <div className="profilepage__buttons">
                    <button className="ActivityLog">
                        <span>😂</span> Activity log
                    </button>
                    <button className="EditPhoto">
                    <span>😂</span> Edit Cover photo
                    </button>
                </div>
            </div>


            <div className="profilepage__introduction">
                <div className="profilepage__top">
                    <strong>{user.displayName} </strong><small>(Cantautor)</small>
                </div>
                <div className="profilepage__middle">
                    <p>bla bla bla</p>
                </div>
                <div className="profilepage__bottom">
                    <p>Edit</p>
                </div>
            </div>
            <div className="profilepage__options">
                <div className="profilepage__optionsLeft">
                    <p>Timeline</p>
                    <p>About</p>
                    <p>Friends</p>
                    <p>Photos</p>
                    <p>Archive</p>
                    <p>More</p>
                </div>
                <div className="profilepage__optionsRight">
                <button>
                    <span>😂</span> Edit profile
                </button>
                <p>Eye</p>
                <p>Eye</p>
                <p>More</p>

                </div>
            </div>
            <div className="profileMain">
            <div className="profileMain__intro">
            <Intro />
            <ProfilePhotos />
            <ProfileFriends />
            </div>
            <div className="profileMain__Right">
                <div className="profileMain__RightMessage">
                <MessageSender />
                <Post />
                <Post />
                <Post />
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfilePage

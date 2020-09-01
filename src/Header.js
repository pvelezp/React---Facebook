import React, {useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { actionTypes } from './reducer'
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { ReactComponent as MessengerIcon} from './icons/messenger.svg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import {auth} from './firebase'
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  

const Header = () => {

    const [open, setOpen] = useState(false)

    const [{user, isDark}, dispatch] = useStateValue()
console.log(isDark)
    const LogOut = () => {
     auth.signOut()
     .then(result => {     
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        }) })
        .catch(error => alert(error.message))}
        
    const toggleMode = () => {
      dispatch({
        type: actionTypes.TOGGLE_DARK_MODE
      })
    }
    return (
        <div className={isDark ? 'header dark__mode' : "header"}>
          <Link to='/' className="header__left">
            <div className="header__left">
         
         
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
        
        <div className="header__input">
            <SearchIcon />
            <input type="text"/>
        </div>
            </div>
            </Link>
            <div className="header__middle">
        <div className="header__option
        header__option--active
        ">
          <Link to='/' >
            <HomeIcon fontSize="large" />
            </Link>
        </div>
        <div className="header__option">
            <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
            <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
        </div>
            </div>
        <div className="header__right">
        <div className="header__info">
          <Link to='/profile'>
          <div className="header__infoProfile">
          <Avatar />
                
 
                <h3>{user.displayName}</h3>
          </div>
          </Link>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <MessengerIcon />
            </IconButton>
            <IconButton
             onClick={LogOut}
            >
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton 
            onClick={() => setOpen(!open)}
            >
                <ExpandMoreIcon
                      
                />

            {open && <DropdownMenu />}
  
            </IconButton>


        </div>
        </div>
        </div>
    )
}

export default Header

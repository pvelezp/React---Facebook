import React from 'react'
import './DropdownMenu.css'
import { ReactComponent as CogIcon} from './icons/cog.svg'
import { ReactComponent as ChevronIcon} from './icons/chevron.svg'
import { ReactComponent as BoltIcon} from './icons/bolt.svg'

import { Avatar } from '@material-ui/core';
import  Brightness3Icon  from '@material-ui/icons/Brightness3';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom'

const DropdownMenu = () => {

    const [{user, isDark}, dispatch] = useStateValue()

    const toggleMode = () => {
        dispatch({
          type: actionTypes.TOGGLE_DARK_MODE
        })
      }

    return (
        <div className="dropdown">

<Link to='/profile'>
        <div className="dropdown__profile"
        
        >
        <div className="dropdown__itemLeftProfile">
        <Avatar />
                
        <div className="profileDrop">
        <h3>Pablo Vélez</h3>  
        <p>See your profile</p>
        </div>
        </div>

            </div>

            </Link>
            <div className="dropdown__item">
        <div className="dropdown__itemLeft">
            <div className="icon-button">
            <CogIcon
                className="icon-Left"
                />
            </div>
                <p>Settings and privacy</p>
        </div>
                <ChevronIcon
                className="icon-Right"
                />
            </div>
 
            <div className="dropdown__item">
        <div className="dropdown__itemLeft">
            <div className="icon-button">
            <BoltIcon
                className="icon-Left"
                />
            </div>
                <p>Settings and privacy</p>
        </div>
                <ChevronIcon
                className="icon-Right"
                />
            </div>
            <div className="dropdown__item">
        <div className="dropdown__itemLeft">
            <div className="icon-button">
            <Brightness3Icon
                className="icon-Left"
                />
            </div>
            <Switch
          onClick={toggleMode}
          />
        </div>
                <ChevronIcon
                className="icon-Right"
                />
            </div>

        </div>
    )
}

export default DropdownMenu

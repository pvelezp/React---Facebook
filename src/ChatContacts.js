import React, {useState} from 'react'
import './ChatContacts.css'
import { Avatar } from '@material-ui/core'
import ChatBox from './ChatBox';
import MessengerIcon from './MessengerIcon';

const ChatContacts = () => {

    const [open, setOpen] = useState(false)
    
    const [closeBox, setCloseBox] = useState(true)
    const handleClose = () => {
        setCloseBox(true)
    }
    return (
        <div className="contactsChat">

            { !closeBox &&   <ChatBox 
            
            handleClose={handleClose}
            />}
           
            <div className="chatContacts">
            {
                open? (
                    <div className="chatContactsOpen">
                        <div
                         onClick={e => setOpen(prevState => !prevState)}
                        className="chatContactsOpen__title">
                        <h2>Contacts</h2>
                        </div>
                        <div className="chatContactsOpen__items">
                        <div 
                        onClick={() => setCloseBox(false)}
                        className="contactsItem">
                            <div className="contactsItemLeft">
                            <Avatar
                            src='https://i.pinimg.com/originals/7c/bf/f7/7cbff7b7a79f34a803dac1c2616397cd.jpg'
                            className="contacts_Avatar"
                            />
                            <p>Paul</p>
                            </div>
                            <div className="contactsItemRight">
                            <p>•</p>
                            </div>

                        </div>
                        <div className="contactsItem"
                        onClick={() => setCloseBox(false)}
                        >
                        <div className="contactsItemLeft">
                            <Avatar
                            src='https://i.pinimg.com/originals/aa/b8/64/aab86495af70d4225086ae8ffcd39cd5.jpg'
                            className="contacts_Avatar"
                            />
                            <p>Ringo</p>
                            </div>
                            <div className="contactsItemRight">
                            <p>•</p>
                            </div>
                        </div>
                        <div className="contactsItem"
                        onClick={() => setCloseBox(false)}
                        >
                        <div className="contactsItemLeft">
                            <Avatar
                            src='https://i.pinimg.com/originals/06/0a/31/060a31c4eb5e25a91e59acf91d67ddd4.jpg'
                            className="contacts_Avatar"
                            />
                            <p>John</p>
                            </div>
                            <div className="contactsItemRight">
                            <p>•</p>
                            </div>
                        </div>
                        <div className="contactsItem"
                        onClick={() => setCloseBox(false)}
                        >
                        <div className="contactsItemLeft">
                            <Avatar
                            src='https://i.pinimg.com/originals/03/c0/d0/03c0d08d0cb2487c61093d2ded37d85a.jpg'
                            className="contacts_Avatar"
                            />
                            <p>George</p>
                            </div>
                            <div className="contactsItemRight">
                            <p>•</p>
                            </div>
                        </div>

                        </div>
                    </div>
                ): (
                    <div
                    onClick={e => setOpen(prevState => !prevState)}
                    >
                    <MessengerIcon 
                    
                    />
                    </div>

                 
                )
            }
        </div>


        </div>

    )
}

export default ChatContacts

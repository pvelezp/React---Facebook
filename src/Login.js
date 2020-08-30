import React, {useState, useEffect} from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider} from './firebase'
import { actionTypes } from './reducer'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import {  IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 330,
      backgroundColor: theme.palette.background.paper,
     
      
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
  }));
const Login = () => {

    const [{user}, dispatch] = useStateValue()
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailSU, setEmailSU] = useState('')
    const [passwordSU, setPasswordSU] = useState('')
    

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
    }, [user, firstName])

    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const signInWithGoogle =  ()=> {
        //sign in..
        auth.
            signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                
            }).catch(err => console.log(err.message))
    }

    const signUp = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(emailSU,passwordSU)
        .then(result => {
            result.user.updateProfile({
                displayName: firstName })
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            }) })
        .catch(error => alert(error.message))

        setOpen(false)
    }

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            }) })
        .catch(error => alert(error.message))
    }
    return (

        <>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div  className={classes.paper}>
       <div className="modal__header">
           <div className="modal__headerHead">
           <h1>Sign Up</h1>
           <IconButton onClick={handleClose}>
           <CloseIcon  />
           </IconButton>
           
           </div>
           <p>It's quick and easy</p>
           </div> 
        <form 
        onSubmit={signUp}
        className="modal__body">
            <div className="modal__bodyNames">
                <input 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                type="text" placeholder="First name"/>
                <input
                 value={lastName}
                 onChange={e => setLastName(e.target.value)}
                type="text" placeholder="Last name"/>
            </div>
            <input 
            value={emailSU}
            onChange={e => setEmailSU(e.target.value)}
            type="text" placeholder="Email"/>
            <input 
            value={passwordSU}
            onChange={e => setPasswordSU(e.target.value)}
            type="password" placeholder="New password" />
            
            <div className="modal__bodyFooter">
            <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
            </div>
            <div className="modal__button">
                <button type="submit">
                    Sign Up
                </button>
            </div>
        </form>
  </div>
</Modal>
        <div className="login">
            <div className="login__logo">
            
            <div className="login__logoTitle">
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>

            <div className="login__logoSubtitle">
            <h2>Connect with friends and the world around you on Facebook</h2>
            </div>
            </div>

        <div className="login__right">
        <div className="login__form">
                
                <div className="login__formForm">
                <form 
                onSubmit={signIn}
                >
                        <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" placeholder="Email"/>
                        <input type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"/>
                        <Button
                        type="submit"
                        >Log in</Button>
        
                    </form>
                    
                    <Button
                    type="submit"
                    onClick={signInWithGoogle}
                    >
                        Sign In with Google
                    </Button>
                
                    <div className="login__formFormSignup">
                    <button
                    onClick={handleOpen}
                    className="button__signup"
                    >
                        Create New Account
                    </button>
                    </div>
                </div>
        
                    </div>
                    <div className="login__message">
            <h4> <span>Create a Page</span> for a celebrity, band or business.</h4>
            </div>
        </div>


        </div>
        </>
    )
}

export default Login

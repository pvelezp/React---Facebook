import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider';
import ChatContacts from './ChatContacts';
import {auth} from './firebase'
import {Switch, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';


function App() {
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
    <div className={isDark ? 'darkmode':"app"}>
      {!user ? <Login /> : (
        <>
              <Header />
              <div className="app__body">
        <Switch>
          <Route exact path='/'>
          <Sidebar />
                <Feed />
                <Widgets />
          </Route>
          <Route path='/profile' component={ProfilePage}  />
        </Switch>
               
              </div>
              <ChatContacts /> 
              
              </>
      )  }

    </div>
  )
}

export default App;

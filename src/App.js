import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
import ChatContacts from './ChatContacts';

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
               
              </div>
              <ChatContacts /> 
              </>
      )  }

    </div>
  )
}

export default App;

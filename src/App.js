import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { auth } from './firebaseConfig';
import Login from './Login';
import { useState, useEffect } from 'react';
import { getAuth, setPersistence, signInWithEmailAndPassword, inMemoryPersistence, signInWithRedirect, browserSessionPersistence, GoogleAuthProvider } from "firebase/auth";


function App() {

  const [user, setUser] = useState();

  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {user ? 
        <div className="app__body">
          <SideBar user={user} setUser={setUser} /> 
          <Feed user={user} />
        </div> :
        <Login setUser={setUser} user={user}/>
      }
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>

      {/* App body */}
        <div className="app__body">
          {/* Sidebar */}
          <SideBar /> 
          {/* Feed */}
          <Feed />
        { /* Widgets */}
        </div>

    </div>
  );
}

export default App;

import './App.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js'

function App() {
  return (
    // BEM
    <div className="app">
      {/* <h1>Twitter Clone Project</h1> */}

      {/* Sidebar */}
      <Sidebar />
      
      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;

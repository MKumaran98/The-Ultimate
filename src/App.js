import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './containers/Home/Home';

function App() {
  const items=[
    "about",
    "projects",
    "blogs",
    "contact"
  ]
  return (
    <div className="App">
      <Navbar/>
      <main className="main-section">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* {
            items.map(item=>(
              <Route exact path={`/${item}`} component={item}/>
            ))
          } */}
        </Switch>
      </main>
    </div>
  );
}

export default App;

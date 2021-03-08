import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import SocialIcons from './component/SocialLinks/socialicons';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main className="main-section">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </main>
      <SocialIcons/>
    </div>
  );
}

export default App;

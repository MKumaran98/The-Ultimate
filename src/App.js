import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import SocialIcons from './component/SocialLinks/socialicons';
import Blogs from './containers/Blogs/Blogs';
import About from './containers/About/About';
import Contact from './containers/contact/contact';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main className="main-section">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contacts" component={Contact}/>
        </Switch>
      </main>
      <SocialIcons/>
    </div>
  );
}

export default App;

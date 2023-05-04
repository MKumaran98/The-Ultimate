import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Projects from "./containers/WorkExprience/WorkExp";
import SocialIcons from "./component/SocialLinks/SocialIcons";
import Blogs from "./containers/Blogs/Blogs";
import About from "./containers/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-section">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work-exp" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <SocialIcons />
    </div>
  );
}

export default App;

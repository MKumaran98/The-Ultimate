import "./App.css";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work-exp" element={<Projects />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>
      <SocialIcons />
    </div>
  );
}

export default App;

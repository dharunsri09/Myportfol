import Nav from "./components/Nav";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from './components/About'
import Projects from './components/Projects'
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
  <div>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;

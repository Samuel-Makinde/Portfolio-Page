import './index.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import { Footer } from './component/Footer';

function App() {
  
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

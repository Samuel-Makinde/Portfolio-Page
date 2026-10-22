import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Capabilities />
        <Experience />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

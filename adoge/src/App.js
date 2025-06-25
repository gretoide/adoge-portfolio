import './styles/App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="construction-banner">
        <i className="fa fa-cog fa-spin" style={{ marginRight: '0.5em' }}></i>
        Sitio en construcción
      </div>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

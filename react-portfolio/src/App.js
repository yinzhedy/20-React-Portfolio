import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import ContactForm from './components/contact';
import About from './components/about';


function App() {
  
  return (
    <div className="App">
        < Header />
        <About/>
        <Resume/>
        <Portfolio/>
        <ContactForm/>
        < Footer />
    </div>
  );
}

export default App;

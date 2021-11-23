import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
        < Header />
        <Portfolio/>
        < Footer />
    </div>
  );
}

export default App;

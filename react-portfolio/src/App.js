import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
        < Header />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Portfolio/>
        < Footer />
    </div>
  );
}

export default App;

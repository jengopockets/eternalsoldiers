import { Router } from 'react-router';
import background from './img/stoneBackground.jpg';
import history from './util/history';
import './App.css';
import NavBar from './Navbar/Navbar';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition:'top center', width:'100%' }} className="App">
      <header className="App-header">
        <Router history={history}>
          <NavBar/>
        </Router>
      </header>
    </div>
  );
}

export default App;

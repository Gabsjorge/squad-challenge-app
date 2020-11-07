import './App.css';

import logo from './assets/venturusLogo.png';
import Navbar from './React components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />

      <br />

      <div className="row">
        <div className="column">
          <div className="myteamsbox">
            <p>Bla</p>
          </div>
        </div>
        <div className="column">
          <div className="top5box">
            <p>Ble</p>
          </div>
          <div className="topplayersbox">
            <p>Bli</p>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;

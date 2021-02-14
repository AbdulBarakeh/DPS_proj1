import logo from './logo.svg';
import './App.css';
import axios from 'axios'
var getCookie = () => {
  axios.get(`http://localhost:3000/index`).then((res) => {
    var div = document.getElementById("fortunecookies")
    div.innerText = res.data.fortune
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="title">Fortune Cookie Generator</h1>
        <div id="fortunecookies"></div>
        <button id="fortuneBtn" onClick={getCookie}>Get Fortune</button>
      </header>
    </div>
  );
}

export default App;

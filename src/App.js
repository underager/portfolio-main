import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="introduction">
        <h1>Hi I'm Atul Nirbhavane</h1>
        <h4>a Web Developer</h4>
      </div>

      <div className="profile-links-div">
        <ul>
          <li><a href="https://twitter.com/underager_d" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://github.com/underager"target="_blank" rel="noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/atul-nirbhavane-554067b4/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

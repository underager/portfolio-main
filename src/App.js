import './App.css';
import { Outlet} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  const pathName = window.location.pathName;
  console.log('Params : '+pathName);
  return (
    <div className="App">
      <Navbar />
      <div className="introduction">
        <h1>Hi I'm Atul Nirbhavane</h1>
        <h4>a Web Developer</h4>
        {Math.floor(Math.random() * 10)}
      </div>

      <div className="profile-links-div">
        <ul>
          <li><a href="https://twitter.com/underager_d" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://github.com/underager"target="_blank" rel="noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/atul-nirbhavane-554067b4/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;

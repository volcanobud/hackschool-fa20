//$ git config --global core.autocrlf false
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CreatePokemon from './Pages/CreatePokemon';
import ViewPokemon from './Pages/viewPokemon';
import API from './API.js';
function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          <Redirect from="/" to="/create" exact/>
          <Route path = "/create" component = {CreatePokemon}exact /> 
          <Route path = "/view" component = {ViewPokemon} exact />
        </Switch>
      </div>
    </Router>
    //<CreatePokemon />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;

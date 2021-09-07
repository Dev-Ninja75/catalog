import React from "react"; 
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home";
import Movie from "./component/Movie";


export class App extends React.Component {
  constructor () {
    super (); 

    this.state = {

      movies: [],

    }
  }

componentDidMount() {
  fetch("./dataMovies.json")
  .then(result => result.json())
  .then(result => this.setState({movies: result}))

}


render () {
  console.log("App.js render this.state.movies -->", this.state.movies) 
  return (

    <BrowserRouter> 
    <div>
      <nav> {/* liste de filmes */}
        <ul>
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/movie">Movie</Link></li> 
          {/* <li><Link to="/">Movie</Link></li>  */}
       
        </ul>
      </nav>

      <Switch> 
        <Route exact path="/home" component={Home}/> 
        <Route path="/movie" component={Movie}/>
        {/* <Route path="/" component={}/>
        <Route path="*" component={Error404}/> */}
      </Switch>
    </div>
  </BrowserRouter>

    );
  }
}

export default App; 


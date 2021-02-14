import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Film from "./Components/Film";
import movies from "./movies.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        
        {movies.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          )
        })}
        <Switch>
          <Route path="/movie/:id"
            render={(props) => {
              return (
                <Film {...props}></Film>
              )
            }}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
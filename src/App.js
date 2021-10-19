import "./App.css";
import react from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

class App extends react.Component {
  render() {
    return (
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
          {/* switch para pasar paths con datos */}
        </main>
      </Router>
    );
  }
}

export default App;

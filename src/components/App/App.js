import Header from '../Header';
import SearchResults from '../SearchResults';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
            <Route exact path="/">
              <span>Inicio</span>
            </Route>
            <Route path="/items">
              <SearchResults />
            </Route>
          </Switch>
      </main>
    </Router>
  );
}

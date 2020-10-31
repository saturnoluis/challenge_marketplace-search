import Header from '../Header';
import SearchResultsContainer from '../SearchResultsContainer';
import ProductDetailsContainer from '../ProductDetailsContainer';
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
          <Route path="/items/:id">
            <ProductDetailsContainer />
          </Route>
          <Route path="/items">
            <SearchResultsContainer />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

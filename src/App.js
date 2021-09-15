import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <SearchParams />
        </Route>
      </Router>
      ;
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

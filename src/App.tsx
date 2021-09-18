import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import style from "styled-jsx";

const Index = lazy(() => import("./pages/Index"));
const Articles = lazy(() => import("./pages/Articles"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div>
          <Suspense fallback={<h3>loading...</h3>}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/articles/:id" component={Articles} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </div>
      </div>
      <style jsx>{`
        .header {
          height: 20px;
        }
      `}</style>
    </Router>
  );
}

export default App;

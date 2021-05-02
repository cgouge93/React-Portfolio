import "./App.scss";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <div className="sidebar">
       <Navbar />
     </div>
     <div className="main-content">
       <div className="content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
        </Switch>
       </div>
     </div>
    </div>
  );
}

export default App;

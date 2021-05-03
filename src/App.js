import "./App.scss";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
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
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
        </Switch>
       </div>
     </div>
    </div>
  );
}

export default App;

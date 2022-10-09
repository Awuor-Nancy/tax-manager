import { BrowserRouter, Route,  Switch } from "react-router-dom";
import Header from "./Header";
import Navbar from './Navbar';
import Taxcalculator from './Taxcalculator';
import Billmanager from "./Billmanager";

// style
import "./App.css"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
       <Header />
      <div className="app-wrapper">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route  exact path ="/">
              <Taxcalculator />
            </Route>

            <Route path="/billManager">
              <Billmanager />
            </Route>

        </Switch>
      
        </BrowserRouter>
        </div>
        <Footer />
    </div>
  );
}

export default App;
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Navbar from './Navbar';
import Taxcalculator from './Taxcalculator';
import Billmanager from "./Billmanager";
import LoginForm from "./LoginForm";

// style
import "./App.css"

function App() {
  return (
    <div className="App">
       <Header />
      <div className="app-wrapper">

        <BrowserRouter>
            <Navbar />
            
        <Switch>
          <Route>
            <LoginForm exact path = '/loginform'/>
          </Route>

            <Route path ="/taxcalculator">
              <Taxcalculator />
            </Route>

            <Route path="/billManager">
              <Billmanager />
            </Route>

        </Switch>
      
        </BrowserRouter>
        </div>
       
    </div>
  );
}

export default App;
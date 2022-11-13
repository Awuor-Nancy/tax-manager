import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";

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
            
        <Switch>   

          <Route exact path="/"  component={ LoginForm } />

          <Route path="/taxcalculator"  component={ Taxcalculator } />


          <Route path="/billmanager"  component={Billmanager}/>

          </Switch>
      
          </BrowserRouter>
          </div>
       
    </div>
  );
}

export default App;
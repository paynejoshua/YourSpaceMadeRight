import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/about";
import Applause from "./pages/applause";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Schedule from "./pages/schedule";
import Services from "./pages/services";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router> 
     <Switch>
      
       <Route exact path="/" component={Home} />
       <Route exact path="/home" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/applause" component={Applause} />
       <Route exact path="/blog" component={Blog} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/schedule" component={Schedule} />
       <Route exact path="/services" component={Services} />
       
     </Switch>

   </Router>
  );
}

export default App;

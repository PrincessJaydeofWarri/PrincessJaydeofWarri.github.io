import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'
import AOS from 'aos';


function App() {
AOS.init()
return (
  <>
<Router>
<Navbar />
<Switch>
<Route path='/' exact component={Home}/>
<Route path='/work' component={Work}/>
<Route path='/about' component={About}/>
<Route path='/contact' component={Contact}/>

</Switch>
</Router>
</>
);
}

export default App;

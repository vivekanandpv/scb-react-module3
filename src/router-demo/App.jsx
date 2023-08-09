import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Customers from './Customers';
import NotFound from './NotFound';

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/customers' exact component={Customers} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
};

export default App;

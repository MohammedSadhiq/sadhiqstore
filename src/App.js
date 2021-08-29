import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './container/Header';
import './App.css';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />      
      <Switch>
        <Route path='/' exact component={ProductListing}/>
        <Route path ='/product/:productId'  component={ProductDetail}/>
        <Route>404 Not found</Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;

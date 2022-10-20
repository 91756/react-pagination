import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home.js'
import ManageProperty from './components/ManageProperty'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/rent" component={Home} />
      <ProtectedRoute exact path="/buy" component={Home} />
      <ProtectedRoute exact path="/sell" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App

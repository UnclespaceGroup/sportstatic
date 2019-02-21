import React, {Component} from 'react'
// import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'
import Home from './containers/Home/Home'
import {BrowserRouter} from 'react-router-dom'
import Register from './containers/Register/Register'
import LiteTraining from './containers/LiteTraining/LiteTraining'
import CardForm1 from './containers/CardForm1/CardForm1'

class App extends Component {
  render () {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/Register'} component={Register} />
            <Route path={'/lite'} component={LiteTraining} />
            <Route path={'/Form1'} component={CardForm1}/>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App

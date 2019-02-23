import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import { BrowserRouter } from 'react-router-dom'
import HttpsRedirect from 'react-https-redirect'
import { store } from './store'

class App extends Component {
  render () {
    return (
      <HttpsRedirect>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path={'/'} component={HomeContainer} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </HttpsRedirect>
    )
  }
}

export default App

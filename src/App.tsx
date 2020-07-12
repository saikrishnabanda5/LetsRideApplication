import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import HomePage from './Common/HomePage'
import BaseButtonComponent from './Common/Button'
import rideAppRoutes from './Commute/routes'
import CommuteStore from './Commute/stores/index.js'
import AuthenticationStore from './Authentication/stores'
import './App.css'
import { observer } from 'mobx-react'
import RideApp from './Commute/components/RideApp'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import LoadingView from './Common/components/LoadingWrapperWithFailure/LoadingView'
import routes from './Authentication/routes'

@observer
class App extends React.Component {
   constructor(props: Readonly<{}>) {
      super(props)
   }
   render() {
      return (
         <Provider {...AuthenticationStore} {...CommuteStore}>
            <I18nextProvider i18n={i18n}>
               <Suspense fallback={<LoadingView />}>
                  <Router basename={process.env.PUBLIC_URL}>
                     <Switch>
                        {routes}
                        {rideAppRoutes}
                        {/*
                  <Route exact path='/page-1'>
                     <BaseButtonComponent /> 
                  </Route>*/}
                        <Route path='/'>
                           <HomePage />
                        </Route>
                     </Switch>
                  </Router>
               </Suspense>
            </I18nextProvider>
         </Provider>
      )
   }
}

export default App
//<Route exact path="/RideApp" component={RideApp} />

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CryptoCurrencyTracker from './components/CryptocurrencyTracker'

import './App.css'

const App = () => (
  <div className="">
    <switch>
      <Route exact path="/" component={CryptoCurrencyTracker} />
    </switch>
  </div>
)

export default App

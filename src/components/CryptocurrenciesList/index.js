import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="user-and -euro-value-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {currencyList} = this.props

    return (
      <div className="cryoptocurrencies-list-container" data-testid="Loader">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {currencyList.map(each => (
            <CryptocurrencyItem key={each.id} currencyListItem={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container" data-testid="Loader">
        <h1 className="list-coin-value-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrency-image"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList

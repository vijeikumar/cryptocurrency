// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {currencyListItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyListItem

  return (
    <div className="cryptocurrency-item">
      <div className="logo-and-title-container" data-test-id="Loader">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptoCurrencyItem

// Write your JS code here
import {Component} from 'react' 

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CurrencyListItem from '../CryptocurrencyItem' 

import './index.css'

class CryptoCurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getTheCurrency()
  }
  getTheCurrency = async () => {
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data =await response.json()

    const updatedData = data.map(
      each => ({
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
        id: each.id,
        currencyLogo: each.currency_logo,
      
      }))
    this.setState({currencyList:updatedData,isLoading:false})
      }
  }
  renderCryptoCurrenciesList=()=>{
      const {currencyList}=this.data
      return <CurrencyListItem currencyList={currencyList}/>
  }
  renderLoader=()=>{
      <div><Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
  }
  
  render() {

      const {isLoading,currencyList}=this.state

      return(
          
              <div className="app-container" data-testid="loader"> {isLoading?: 
              (this.renderLoader():this.renderCryptoCurrenciesList()
             
              )}
              </div>

              
              
      )
  }
}
export default CryptoCurrencyTracker


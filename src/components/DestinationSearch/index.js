import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg1">
        <h1>Destination Search</h1>
        <div className="inp">
          <input
            className="input"
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.searchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="icon"
            alt="Searchicon"
          />
        </div>
        <div className="destdiv">
          {searchResults.map(eachDest => (
            <DestinationItem destinationDetails={eachDest} key={eachDest.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default DestinationSearch

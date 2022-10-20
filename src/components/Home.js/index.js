import {Component} from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BiCalendar} from 'react-icons/bi'
import PropertyDetails from '../PropertyDetails'
import Header from '../Header'
import './index.css'

const propertiesData = [
  {
    id: '1',
    propertyType: 'HOUSE',
    type: 'rent',
    address: '289-2,Film Nagar, Jubilee Hills, Hyderabad',
    location: 'Hyderabad',
    image: 'https://wallpaperaccess.com/full/3060214.jpg',
    beds: 3,
    bathrooms: 2,
    square: '4x5 m2',
    price: 2500,
  },
  {
    id: '2',
    propertyType: 'HOUSE',
    type: 'rent',
    address: '23-10,Kothapet, Hyderabad',
    location: 'Hyderabad',
    image: 'https://wallpaperaccess.com/full/3434330.jpg',
    beds: 4,
    bathrooms: 3,
    square: '5x7 m2',
    price: 3000,
  },
  {
    id: '3',
    propertyType: 'HOUSE',
    type: 'rent',
    address: '980-12, Bolarum Hyderabad',
    location: 'Hyderabad',
    image:
      'https://i.pinimg.com/originals/b1/15/18/b11518ccfd6295f09f83b7d4baec7cfd.jpg',
    beds: 4,
    bathrooms: 3,
    square: '4x6 m2',
    price: 5300,
  },
  {
    id: '4',
    propertyType: 'HOUSE',
    type: 'rent',
    address: 'Sriram Nagar colony,Kamareddy',
    location: 'Kamareddy',
    image:
      'https://st2.depositphotos.com/1041088/8016/i/950/depositphotos_80167630-stock-photo-modern-house-with-gray-exterior.jpg',
    beds: 3,
    bathrooms: 2,
    square: '5x5 m2',
    price: 8000,
  },
  {
    id: '5',
    propertyType: 'HOUSE',
    type: 'rent',
    address: 'Ashok Nagar colony,Kamareddy',
    location: 'Kamareddy',
    image: 'https://wallpapercave.com/wp/wp3604632.jpg',
    beds: 4,
    bathrooms: 3,
    square: '5x4 m2',
    price: 5000,
  },
  {
    id: '6',
    propertyType: 'HOUSE',
    type: 'buy',
    address: 'Vidya Nagar colony,Kamareddy',
    location: 'Kamareddy',
    image: 'https://i.ytimg.com/vi/jhxECt4eWcA/maxresdefault.jpg',
    beds: 6,
    bathrooms: 3,
    square: '6x6 m2',
    price: 15000,
  },
  {
    id: '7',
    propertyType: 'HOUSE',
    type: 'rent',
    address: 'Rajiv Nagar colony,Kamareddy',
    location: 'Kamareddy',
    image: 'https://i.ytimg.com/vi/knXxbZqLlgA/maxresdefault.jpg',
    beds: 5,
    bathrooms: 5,
    square: '5x4 m2',
    price: 15000,
  },
  {
    id: '8',
    propertyType: 'HOUSE',
    type: 'rent',
    address: '5-30, Station Road,Kamareddy',
    location: 'Kamareddy',
    image:
      'https://www.veeduonline.in/wp-content/uploads/2015/11/anel-11-4-d1a.jpg',
    beds: 4,
    bathrooms: 2,
    square: '3x4 m2',
    price: 20000,
  },
  {
    id: '9',
    propertyType: 'HOUSE',
    type: 'rent',
    address: 'Banjara Hills Road No 40 ,Hyderabad',
    location: 'Hyderabad',
    image:
      'https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg ',
    beds: 4,
    bathrooms: 3,
    square: '3x4 m2',
    price: 15000,
  },
]

const propertyType = [
  {
    label: 'Houses',
    propertyTypeId: 'HOUSE',
  },
  {
    label: 'Lands',
    propertyTypeId: 'LAND',
  },
]

const rentRangesList = [
  {
    priceRangeId: '3500',
    label: '$2500-$3500',
  },
  {
    priceRangeId: '5500',
    label: '$3500-$5500',
  },
  {
    priceRangeId: '10000',
    label: '$5500-$10000',
  },
  {
    priceRangeId: '20000',
    label: '$10000-$20000',
  },
]

const tabList = [
  {tabId: 'rent', label: 'Rent'},
  {tabId: 'buy', label: 'Buy'},
  {tabId: 'sell', label: 'Sell'},
]

class Home extends Component {
  state = {
    allProperties: propertiesData,
    activeTabId: tabList[0].tabId,
    price: rentRangesList[0].label,
    type: propertyType[0].propertyTypeId,
    searchInput: '',
    location: 'Hyderabad',
  }

  getFilterProperties = () => {
    const {match} = this.props
    const {path} = match
    const newPath = path.replace('/', '')
    console.log(newPath)
    const filterProperties = propertiesData.filter(eachProperty =>
      eachProperty.type.includes(newPath),
    )
    return filterProperties
  }

  changeActiveTab = id => {
    this.setState({activeTabId: id})
  }

  getFilteredProperties = () => {
    const {location, price, type, activeTabId} = this.state

    const filteredProperties = propertiesData.filter(
      eachProperty =>
        eachProperty.type === activeTabId && eachProperty.propertyType === type,
    )
    console.log(filteredProperties)
    const price1 = price.split('-')
    let p1 = price1[0]
    p1 = p1.slice(1, p1.length)
    p1 = Number(p1)
    let p2 = price1[1]
    p2 = p2.slice(1, p1.length)
    p2 = Number(p2)
    // console.log(p1, p2)
    const allSatisfy = filteredProperties.filter(
      property => property.price >= p1 && property.price <= p2,
    )
    console.log(allSatisfy)
    const allFiltered = allSatisfy.filter(each => each.location === location)
    console.log(allFiltered.length)
    this.setState({allProperties: allFiltered})
  }

  onChangeFilteredItems = () => {
    this.getFilteredProperties()
  }

  onChangePrice = event => {
    console.log(event.target.value)
    this.setState({price: event.target.value})
  }

  onChangeType = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  getFiltered = () => {
    const {type, activeTabId} = this.state
    const filteredProperties = propertiesData.filter(
      eachProperty =>
        eachProperty.type === activeTabId && eachProperty.propertyType === type,
    )
    return filteredProperties
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchedProperties = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      console.log(searchInput)
      const filtered = propertiesData.filter(eachProperty =>
        eachProperty.location
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase()),
      )
      this.setState({allProperties: filtered})
    }
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  render() {
    const {match} = this.props
    const newFilter = this.getFilterProperties()
    console.log(newFilter)
    // console.log(match.path)
    const {allProperties, activeTabId, price, type, searchInput} = this.state
    // console.log(price, type)
    const filteredProperties = this.getFiltered()
    return (
      <div>
        <Header
          activeTabId={activeTabId}
          changeActiveTab={this.changeActiveTab}
        />
        <div className="home-container">
          <div className="search-container">
            <h1 className="heading">Search Properties to rent</h1>
            <div className="select-search">
              <input
                type="search"
                className="select-bar"
                placeholder="SearchwithSearchBar"
                onChange={this.onChangeInput}
                value={searchInput}
                onKeyDown={this.getSearchedProperties}
              />
              <IoIosArrowDropdown className="icon-drop" />
            </div>
          </div>
          <div className="filtered-container">
            <li className="filtered-cart">
              <p className="name-of-location">Location</p>
              <br />
              <h1 className="place-of-location">
                <select
                  className="place-of-location option-property"
                  onChange={this.onChangeLocation}
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kamareddy">Kamareddy</option>
                </select>
              </h1>
            </li>
            <hr className="hr-line" size={30} />
            <li className="filtered-cart">
              <p className="name-of-location">When</p>
              <br />
              <h1 className="place-of-location">
                SelectMove-in Date
                <label htmlFor="date">
                  <BiCalendar />
                </label>
                <input type="date" id="date" className="date" />
              </h1>
            </li>
            <hr className="hr-line" size={30} />

            <li className="filtered-cart">
              <p className="name-of-location">Price</p>
              <br />
              <select
                className="place-of-location option-property"
                onChange={this.onChangePrice}
              >
                {rentRangesList.map(each => (
                  <option key={each.propertyTypeId} value={each.label}>
                    {each.label}
                  </option>
                ))}
              </select>
            </li>
            <hr className="hr-line" size={30} />
            <li className="filtered-cart">
              <p className="name-of-location">Property Type</p>
              <br />
              <select
                className="place-of-location option-property"
                onChange={this.onChangeType}
              >
                {propertyType.map(property => (
                  <option
                    key={property.propertyTypeId}
                    value={property.propertyTypeId}
                  >
                    {property.label}
                  </option>
                ))}
              </select>
            </li>
            <hr className="hr-line" size={30} />
            <button
              type="button"
              className="logout-button"
              onClick={this.onChangeFilteredItems}
            >
              Search
            </button>
          </div>

          {allProperties.length > 0 ? (
            <ul className="properties-container">
              {allProperties.map(eachProperty => (
                <PropertyDetails
                  key={eachProperty.id}
                  propertyData={eachProperty}
                />
              ))}
            </ul>
          ) : (
            <div className="no-display">
              <h1> Their is no Properties in the given range</h1>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home

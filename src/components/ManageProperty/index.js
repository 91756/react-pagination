import {Component} from 'react'
import './index.css'

class ManageProperty extends Component {
  state = {propertyType: ''}

  render() {
    return (
      <div className="manage-property">
        <h1>Add a property</h1>
        <div className="type-category">
          <label htmlFor="typeofproperty">Property Type</label>
          <select id="typeofproperty">
            <option value="HOUSE">House</option>
            <option value="LAND">Land</option>
          </select>
        </div>

        <div className="type-category">
          <label htmlFor="typeof">Type: </label>
          <select id="typeof">
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        <div className="type-category">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>

        <div className="type-category">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
        </div>

        <div className="type-category">
          <label htmlFor="imageurl">image</label>
          <input type="text" id="imageurl" />
        </div>
      </div>
    )
  }
}
export default ManageProperty

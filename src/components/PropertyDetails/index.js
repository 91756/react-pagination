import {BsSuitHeart, BsStars} from 'react-icons/bs'
import {BiBed, BiBath} from 'react-icons/bi'
import {MdCropSquare} from 'react-icons/md'
import './index.css'

const PropertyDetails = props => {
  const {propertyData} = props
  // console.log(propertyData)
  const {
    address,
    location,
    image,
    beds,
    bathrooms,
    square,
    price,
  } = propertyData

  return (
    <li className="property-container">
      <img src={image} alt="not found" className="image" />
      <div className="flower-tie">
        <BsStars color="white" size={20} /> Popular
      </div>
      <div className="details-of-property">
        <div className="details-cart">
          <h1 className="price-amount"> ${price}/month </h1>
          <div className="heart-box">
            <BsSuitHeart color="#6b79e8" />
          </div>
        </div>
        <h1 className="location-name">{location}</h1>
        <p className="address-name">{address}</p>
        <hr />
        <div className="extra-details">
          <div>
            <BiBed color="#6b79e8" /> {beds} Beds
          </div>
          <div>
            <BiBath color="#6b79e8" /> {bathrooms} Bathrooms
          </div>
          <div>
            <MdCropSquare color="#6b79e8" /> {square}
          </div>
        </div>
      </div>
    </li>
  )
}

export default PropertyDetails

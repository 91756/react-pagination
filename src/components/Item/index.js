import {TiDelete} from 'react-icons/ti'
import './index.css'

const Item = props => {
  const {item, onChangeList} = props
  const {id, name} = item

  const onChangeItem = () => {
    onChangeList(id)
  }

  return (
    <li>
      <h1>{name} </h1>
      <button type="button" onClick={onChangeItem}>
        <TiDelete />
      </button>
    </li>
  )
}

export default Item

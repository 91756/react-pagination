import {Component} from 'react'
import './index.css'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log('constructor is called')
    this.state = {count: 0}
  }

  componentDidMount() {
    console.log('did mount is called')
    setTimeout(() => {
      this.setState({count: 10})
    }, 1000)
  }

  shouldComponentUpdate() {
    console.log('should component')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState)
  }

  componentDidUpdate() {
    console.log('did update')
  }

  updateCount = () => {
    this.setState(prevState => ({count: prevState.count + 2}))
  }

  render() {
    const {count} = this.state
    console.log('render method is  called')
    return (
      <div className="bg-cont">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button type="button" onClick={this.updateCount}>
          Update
        </button>
      </div>
    )
  }
}

export default LifeCycle

import {Component} from 'react'
import './index.css'

/*  <button type="button" onClick={this.onChangeShow}>
          {show ? 'login' : 'logout'}
        </button> */

class Conditional extends Component {
  state = {show: true}

  onChangeShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  authButton = () => {
    const {show} = this.state
    if (show === true) {
      return (
        <button type="button" onClick={this.onChangeShow}>
          Logout
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onChangeShow}>
        Login
      </button>
    )
  }

  render() {
    const {show} = this.state
    return (
      <div>
        <h1>{show ? 'Login success full' : 'Login not Done'}</h1>
        {this.authButton()}
      </div>
    )
  }
}
export default Conditional

import UseContext from '../../context'

const ComponentB = () => (
  <UseContext.Consumer>
    {value => {
      const {user} = value
      return <h1>{user}</h1>
    }}
  </UseContext.Consumer>
)
export default ComponentB

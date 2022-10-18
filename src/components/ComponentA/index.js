import UseContext from '../../context'

const ComponentA = () => (
  <UseContext.Consumer>{value => <h1>{value.user}</h1>}</UseContext.Consumer>
)

export default ComponentA

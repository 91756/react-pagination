import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [noPages, setPages] = useState(10)
  const [cp, setPage] = useState(1)

  /* const noOfPages = Math.ceil(data.length / noPages)
  const pages = [...Array(noOfPages + 1).keys()].splice(1) */

  const noOfPages = Math.ceil(data.length / noPages)
  const pages = [...Array(noOfPages + 1).keys()].splice(1)

  const last = cp * noPages
  const first = last - noPages
  const pa = data.slice(first, last)

  console.log(pa)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/').then(resp => {
      console.log(resp)
      return setData(resp.data)
    })
  }, [])

  const onChange = n => {
    setPage(n)
  }

  const onPreveChanage = () => {
    if (cp !== 1) {
      setPage(cp - 1)
    }
  }

  return (
    <div>
      <h1>Krishna Supriya</h1>
      {pa.map(item => (
        <p key={item.id}> {item.title}</p>
      ))}
      <h1>Pagination</h1>
      <span>
        <button type="button" onClick={() => onPreveChanage()}>
          Prev
        </button>
      </span>
      {pages.map(page => (
        <span key={page}>
          <button type="button" onClick={() => onChange(page)}>
            {`| ${page} |`}
          </button>
        </span>
      ))}
      <span>
        <button type="button">Next</button>
      </span>
    </div>
  )
}
export default App

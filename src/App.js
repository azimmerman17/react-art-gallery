import { useState, useEffect } from 'react'

import './App.css';
import Gallery from './Components/Gallery';
import ButtonBar from './Components/ButtonBar';

function App() {
  let [ artId, changeId ] = useState(12770)
  let [ data, setData ] = useState({})
  
  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(res => res.json())
    .then(resData => setData(resData))
  }, [artId])

  const increment = (e) => {
    changeId(currentValue => currentValue + Number(e.target.value))
  }

  const displayImage = () => {
    if (!data.primaryImage) {
      return (
        <h3>NO Image</h3>
      )
    }
    return (
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      {displayImage()}
      <ButtonBar increment={increment} />
    </div>
  )
}

export default App;

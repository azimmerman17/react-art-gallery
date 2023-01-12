const ButtonBar = ({ increment }) => {
  return (
      <div>
        <button value = {-5} onClick={increment}>Way Back</button>
        <button value = {-1} onClick={increment}>Back</button>
        <button value = {1} onClick={increment}>Next</button>
        <button value = {5} onClick={increment}>Big Next</button>
      </div>
  )
}

export default ButtonBar

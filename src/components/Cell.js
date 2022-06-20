export const Cell = ({index,setCells,turn}) => {

  const handleClick = () => {
    console.log('hi')
    setCells((prev) => {
      console.log('hello')
      prev[index] = turn    
      console.log(prev)
      return prev
    })
  }

  

  return (
    <div className = 'cell' onClick = {handleClick}>
    </div>
  )
}
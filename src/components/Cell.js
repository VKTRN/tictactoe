export const Cell = ({index,cells, setCells,turn}) => {

  const handleClick = () => {
    if(cells[index] !== "") return
    const newCells = [...cells]
    newCells[index] = turn
    setCells(newCells)
  }

  

  return (
    <div className = 'cell' onClick = {handleClick}>
     {cells[index] === "o" && <span>O</span>}
     {cells[index] === "x" && <span>X</span>}
    </div>
  )
}
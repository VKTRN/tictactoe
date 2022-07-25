export const Cell = ({index,cell, setCell}) => {

  return (
    <div className = 'cell' onClick = {() => setCell(index)}>
     {cell === "o" && <span className = 'sign o'>o</span>}
     {cell === "x" && <span className = 'sign x'>x</span>}
    </div>
  )
}
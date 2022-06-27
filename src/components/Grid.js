import {Cell} from './Cell'
import {useState} from 'react'
import {useEffect} from 'react'

export const Grid = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])
  const [gameCount, setGameCount] = useState({'x':0,'o':0})
  const [turn, setTurn] = useState('x')

  const getCurrentTurn = () => {
    return turn === "x" ? "o" : "x"
  }

  // this function checks, if there is a winner
  const checkWinner = () => {
    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < winningCombinations.length; i++){
      const [a,b,c] = winningCombinations[i]
      if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
        return cells[a]
      }
    }
    return null
  }

  // this function checks, if there is a tie
  const checkTie = () => {
    if(cells.filter(cell => cell === "").length === 0){
      return true
    }
    return false
  }

  // this function resets the game
  const resetGame = () => {
    setCells(["","","","","","","","",""])
    setGameCount({'x':0,'o':0})
    setTurn('x')
  }

  useEffect(() => {
    const winner      = checkWinner()
    const tie         = checkTie()
    
    winner && setGameCount({...gameCount, [winner]: gameCount[winner] + 1});
    (winner || tie) && setCells(["","","","","","","","",""]);
    const currentTurn = getCurrentTurn()
    setTurn(currentTurn)

  }, [cells])


  return (
    <div className = 'container'>
      <div>
        <span className = 'blue'>{gameCount.x}</span>:<span className = 'red'>{gameCount.o}</span>
      </div>
      <div className = 'grid'>
        <Cell index={0} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={1} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={2} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={3} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={4} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={5} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={6} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={7} cells={cells} setCells={setCells} turn={turn}/>
        <Cell index={8} cells={cells} setCells={setCells} turn={turn}/>
      </div>
      <button onClick = {resetGame}>Reset</button>
    </div>
  )
}
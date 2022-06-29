import {useState}   from 'react'
import {useEffect}  from 'react'
import {Grid}       from './components/Grid'
import {ScoreBoard} from './components/ScoreBoard'
import './App.css'

function App() {

  const nextTurn = () => {
    return turn === "x" ? "o" : "x"
  }

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

  const checkTie = () => {
    const emptyCells = cells.filter(cell => !cell).length
    return !emptyCells
  }

  const resetGame = () => {
    setCells(Array(9).fill(""))
    setScore({'x':0,'o':0})
    setTurn('x')
  }

  const [score, setScore] = useState({'x':0,'o':0})
  const [cells, setCells] = useState(Array(9).fill(""))
  const [turn,  setTurn]  = useState('x')

  useEffect(() => {
    const winner      = checkWinner()
    const tie         = checkTie()
    
    winner && setScore({...score, [winner]: score[winner] + 1});
    (winner || tie) && setCells(Array(9).fill(""));
    setTurn(nextTurn())

  }, [cells])


  return (
    <div className="App">
      <ScoreBoard score={score}/>
      <Grid cells={cells} setCells={setCells} turn={turn}/>
      <button onClick = {resetGame}>Reset</button>
    </div>
  );
}

export default App;

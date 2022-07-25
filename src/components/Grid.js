import {Cell} from './Cell'

export const Grid = ({cells, setCell}) => {

  return (
    <div className = 'grid'>
      <Cell index={0} cell={cells[0]} setCell={setCell}/>
      <Cell index={1} cell={cells[1]} setCell={setCell}/>
      <Cell index={2} cell={cells[2]} setCell={setCell}/>
      <Cell index={3} cell={cells[3]} setCell={setCell}/>
      <Cell index={4} cell={cells[4]} setCell={setCell}/>
      <Cell index={5} cell={cells[5]} setCell={setCell}/>
      <Cell index={6} cell={cells[6]} setCell={setCell}/>
      <Cell index={7} cell={cells[7]} setCell={setCell}/>
      <Cell index={8} cell={cells[8]} setCell={setCell}/>
    </div>
  )
}
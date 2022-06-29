export const ScoreBoard = ({score}) => {
  return (
    <div className = 'score'>
      <span className = 'x'>{score.x}</span> : <span className = 'o'>{score.o}</span>
    </div>
  )
}
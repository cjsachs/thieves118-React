import { useState } from 'react'

const Message = () => {
  const [games, setGames] = useState(['League Of Legends', 'Red Redemption 2', 'Diablo'])
  const handleClick = () => {
    setGames(games.map(game => game === 'Diablo' ? 'Diablo 4' : game))
  }
  return (
    <div onClick={handleClick}>Intro to React {games}</div>
  )
}

export default Message
import React from 'react'

const NowPlaying = ({currentlyPlayed}) => {
  return (
    <div>
      <h2>Now Playing:</h2>
      <p>Title: {currentlyPlayed.title}</p>
      <p>Artist: {currentlyPlayed.artist}</p>
    </div>
  )
}

export default NowPlaying

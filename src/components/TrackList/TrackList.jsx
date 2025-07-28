import React from 'react'
import { useNavigate } from 'react-router'
import * as trackServices from '../../services/trackService'

const TrackList = ({tracks, filterTracks, addCurrentlyPlayed}) => {
    const navigate = useNavigate()

    const handleEditClick = (trackId)=>{
        navigate(`/edit-track/${trackId}`)
    }
     
    const handleDeleteClick = async (trackId)=>{
        const deletedTrack = await trackServices.deleteTrack(trackId)
        filterTracks(deletedTrack._id)
    }

    const handlePlayClick = (trackObj) =>{
        addCurrentlyPlayed(trackObj)
    }

  return (
      <>
      <div className='Contianer'>
      <h2>Track List</h2>
        {tracks.length === 0 ?  (<h3>No Tracks Have Been Added Yet</h3>) : (tracks.map((track)=>(
            <div key={track._id}>
                <h3>{track.title} by {track.artist}</h3>
                <button onClick={()=> handleEditClick(track._id)}>Edit</button>
                <button onClick={()=> handleDeleteClick(track._id)}>Delete</button>
                <button onClick={()=> handlePlayClick(track)}>Play</button>
            </div>
        )))}
      </div>
      </>
  )
}

export default TrackList

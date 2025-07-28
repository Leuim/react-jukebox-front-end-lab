import React, { useEffect, useState } from 'react'
import TrackList from '../TrackList/TrackList'
import * as trackServices from '../../services/trackService'
import { useNavigate } from 'react-router'
import NowPlaying from '../NowPlaying/NowPlaying'


const Home = () => {
    const [ tracks, setTracks ] = useState([])
    const [ currentlyPlayed, setCurrentlyPlayed] = useState({})
    const [ isPlaying, setIsPlaying] = useState(false)

    const Navigate = useNavigate()
    useEffect(() => {
        const initalTrackList = async () => {
            try {
                const fetchedtrack = await trackServices.index()
                if (fetchedtrack.error) {
                    throw new Error('An error occured')
                }
                setTracks(fetchedtrack)
            } catch (error) {
                console.log(error)
            }
        }
        initalTrackList()
    }, [])

    const handleClick = ()=>{
        Navigate('/add-track')
    }
    const filterTracks = (trackId) =>{
        const filtered = tracks.filter(track =>{
            return track._id !== trackId
        })
        setTracks(filtered)
    }

    const addCurrentlyPlayed = (trackObj)=>{
        setCurrentlyPlayed(trackObj)
        setIsPlaying(true)
    }
    return (
        <>
            <button onClick={handleClick}>Add Track</button>
            <TrackList tracks={tracks} filterTracks={filterTracks} addCurrentlyPlayed={addCurrentlyPlayed}/>
            {isPlaying ? (<NowPlaying currentlyPlayed={currentlyPlayed}/>) : ('')}
            
        </>
    )
}

export default Home

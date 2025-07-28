import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import * as trackServices from '../../services/trackService'

const TrackForm = () => {
    const initialTrack = {
        title: '',
        artist: ''
    }
    const [formData, setFormDate] = useState(initialTrack)
    const navigate = useNavigate()
    const { trackId } = useParams()

    useEffect(() => {
        const fetchTrack = async () => {
            if (trackId) {
                const fetchedTrack = await trackServices.show(trackId)
                setFormDate(fetchedTrack)
            }
        }
        fetchTrack()
    }, [trackId])

    const handleChange = (evt) => {
        const copyFormData = { ...formData, [evt.target.name]: evt.target.value }
        setFormDate(copyFormData)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // console.log(formData)
        if(trackId){
            trackServices.update(formData, trackId)
        } else {
            trackServices.create(formData)
        } 
        setFormDate(initialTrack)
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
            <br />
            <label htmlFor="artist">Artist: </label>
            <input type="text" name="artist" id="artist" value={formData.artist} onChange={handleChange} />
            <br />
            <button type='submit'>{trackId ? 'Update' : 'Add Track'}</button>
        </form>
    )
}

export default TrackForm

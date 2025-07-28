import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import TrackForm from './components/TrackForm/TrackForm'
const App = ()=>{

  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-track' element={<TrackForm/>}/>
      <Route path='edit-track/:trackId' element={<TrackForm/>}/>
    </Routes>
    </>
  )
}

export default App
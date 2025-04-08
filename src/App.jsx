import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Mood from './pages/Mood'
import Habits from './pages/Habits'
import Cooking from './pages/Cooking'
import NoPage from './pages/NoPage'


function App() {
  return <div>
    <Header/>
    <Routes>
<Route path='/mood' element={<Mood/>}/>
<Route path='/habits' element={<Habits/>}/>
<Route path='/cooking' element={<Cooking/>}/>
<Route path='*' element={<NoPage/>}/>
    </Routes>
  </div>
}

export default App

import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import {Home, Mood, Weekly, NoPage} from './pages'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from '../src/redux/weatherOp';


function App() { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ lat: 49.9, lon: 36.34 }));
  }, [dispatch]);
  return <div>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/mood' element={<Mood/>}/>
<Route path='/weekly' element={<Weekly/>}/>
<Route path='*' element={<NoPage/>}/>
    </Routes>
  </div>
}

export default App

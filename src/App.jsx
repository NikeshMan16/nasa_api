import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  
  const [showModel, setShowModel] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)


  function handleToggleModel(){
    setShowModel(!showModel)
  }

  useEffect(()=> {
    async function fetchAPIData(){
      const url = 'https://api.nasa.gov/planetary/apod'+ `?api_key=${NASA_KEY}`
      
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        console.log('Data\n', apiData)

      } catch(err){
        console.log(err.message)

      }
    }
    fetchAPIData()
  },[])

  return (
    <>
      {data ? (<Main data={data}/>)
      : <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>
      }
      {showModel && (
        <Sidebar handleToggleModel={handleToggleModel} data={data}/>
        )}
      {data &&
      (<Footer handleToggleModel={handleToggleModel} data={data} />)}

    </>
  )
}

export default App

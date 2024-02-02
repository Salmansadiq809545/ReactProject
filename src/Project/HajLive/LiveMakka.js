import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
{id:1,title:"Live Haj",url:"https://www.youtube.com/embed/dGTEfbdZNv4"},
{id:2,title:"Live Haj",url:"https://www.youtube.com/embed/hrnT2IFqyro",},
{id:3,title:"Live Madina",url:"https://www.youtube.com/embed/je4v3PUptgA"},
{id:4,title:"Live Haj",url:"https://www.youtube.com/embed/PTSpaP25_KA"},



]
const English = () => {
    const [english,setEnglish]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>Live Haj</h1>
    <div className='container-fluid'>
    <div className='row'>
      {english.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe  width="900" height="500" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>
        </div>
})}
</div>
    </div>
    </div>
  )
}

export default English;
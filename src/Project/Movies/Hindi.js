import React from 'react'
import { useState } from 'react'

const mybiodta=[
{id:1,title:"Hindi Movies",url:"https://www.youtube.com/embed/My5L3qLhewg"},
{id:2,title:"Hindi Movies",url:"https://www.youtube.com/embed/jzYxbnHHhY4",},
{id:3,title:"Hindi Movies",url:"https://www.youtube.com/embed/tPXYWRGNl7s"},
{id:5,title:"Hindi Movies",url:"https://www.youtube.com/embed/ObDdvRLuvFs"},
{id:6,title:"Hindi Movies",url:"https://www.youtube.com/embed/DRL0ohpVJoo"},
{id:7,title:"Hindi Movies",url:"https://www.youtube.com/embed/vB2m1uRF30c"},

{id:8,title:"Hindi Movies",url:"https://www.youtube.com/embed/gKizDojsdvs"},
{id:9,title:"Hindi Movies",url:"https://www.youtube.com/embed/R7aCOI4DuA0"},
{id:10,title:"Hindi Movies",url:"https://www.youtube.com/embed/Q9WMfd96qVo"},
{id:11,title:"Hindi Movies",url:"https://www.youtube.com/embed/VkodoR4Gz9k"},
{id:12,title:"Hindi Movies",url:"https://www.youtube.com/embed/XaXKh-s9zws"},
{id:13,title:"Hindi Movies",url:"https://www.youtube.com/embed/FacrW7dBTco"},

{id:14,title:"Hindi Movies",url:"https://www.youtube.com/embed/iBcfguipGk0"},
{id:15,title:"Hindi Movies",url:"https://www.youtube.com/embed/hXk3pP0q-MU"},
{id:16,title:"Hindi Movies",url:"https://www.youtube.com/embed/TIQ5hrfermg"},
{id:17,title:"Hindi Movies",url:"https://www.youtube.com/embed/O22st4f-ZI0"},


]
const Hindi = () => {
    const [hindimovies,setHindiMovies]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      
      <h1>HINDI MOVIES</h1>
    <div className='container-fluid'>
<div className='row'>
{hindimovies.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe width="420" height="345" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>

        </div>
})}
</div>
    </div>
    </div>
  )
}

export default Hindi
import React from 'react'
import { useState } from 'react'
import '../Movies.css'

const mybiodta=[
{id:1,title:"Tamil Movies",url:"https://www.youtube.com/embed/hUiKN13CxIc"},
{id:2,title:"Tamil Movies",url:"https://www.youtube.com/embed/3uX1TXVWY8A",},
{id:3,title:"Tamil Movies",url:"https://www.youtube.com/embed/hOgw7WF-rhI"},
{id:5,title:"Tamil Movies",url:"https://www.youtube.com/embed/0Z-PcvbgRZU"},
{id:6,title:"Tamil Movies",url:"https://www.youtube.com/embed/0tgSymbOKko"},
{id:7,title:"Tamil Movies",url:"https://www.youtube.com/embed/mvi5RymbQ9A"},

{id:8,title:"Tamil Movies",url:"https://www.youtube.com/embed/iyn8lNst65M"},
{id:9,title:"Tamil Movies",url:"https://www.youtube.com/embed/BQSAFVtNtpI"},
{id:10,title:"Tamil Movies",url:"https://www.youtube.com/embed/AWB0_AVHXQ4"},
{id:11,title:"Tamil Movies",url:"https://www.youtube.com/embed/ooY-SMww3-0"},
{id:12,title:"Tamil Movies",url:"https://www.youtube.com/embed/REyi-MCi4OM"},
{id:13,title:"Tamil Movies",url:"https://www.youtube.com/embed/bmB1gBaVnqY"},


]
const Tamil = () => {
    const [tamilMovies,setTamilMovies]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
  
      <h1>TAMIL MOVIES</h1>
    <div className='container-fluid'>
<div className='row'>
{tamilMovies.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe width="420" height="345" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>
        </div>
})}
</div>
    </div>
    </div>
  )
}

export default Tamil;
import React from 'react'
import { useState } from 'react'
import '../Movies.css'

const mybiodta=[
{id:1,title:"Kannada Movies",url:"https://www.youtube.com/embed/8t40PObAO20"},
{id:2,title:"Kannada Movies",url:"https://www.youtube.com/embed/jZ8ZWCDjR5c",},
{id:3,title:"Kannada Movies",url:"https://www.youtube.com/embed/dx0NORfOqOM"},
{id:5,title:"Kannada Movies",url:"https://www.youtube.com/embed/kADswksciwA"},
{id:6,title:"Kannada Movies",url:"https://www.youtube.com/embed/ITKEYmbwe_k"},
{id:7,title:"Kannada Movies",url:"https://www.youtube.com/embed/kLp2UcVxUNM"},

{id:8,title:"Kannada Movies",url:"https://www.youtube.com/embed/gvIN8dznwm4"},
{id:9,title:"Kannada Movies",url:"https://www.youtube.com/embed/AVm8bOy8zrE"},
{id:10,title:"Kannada Movies",url:"https://www.youtube.com/embed/lHimO3XD7TM"},
{id:11,title:"Kannada Movies",url:"https://www.youtube.com/embed/ceOAoqrllPE"},
{id:12,title:"Kannada Movies",url:"https://www.youtube.com/embed/icvr4vBDLMU"},
{id:13,title:"Kannada Movies",url:"https://www.youtube.com/embed/X-unbS7ifso"},


]
const Kannada = () => {
    const [kannadamovies,setKannadaMovies]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>KANNADA MOVIES</h1>
    <div className='container-fluid'>
    <div className='row'>
      {kannadamovies.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe  width="400" height="345" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>
        </div>
})}
</div>
    </div>
    </div>
  )
}

export default Kannada;
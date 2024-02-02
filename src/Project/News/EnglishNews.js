import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
{id:1,title:"English News",url:"https://www.youtube.com/embed/lyeyoqwXm5o"},
{id:2,title:"English News",url:"https://www.youtube.com/embed/WB-y7_ymPJ4",},
{id:3,title:"English News",url:"https://www.youtube.com/embed/GchsKAozum8"},
{id:4,title:"English News",url:"https://www.youtube.com/embed/TD0A7fHAxKw"},
// {id:6,title:"English News",url:"https://www.youtube.com/embed/ITKEYmbwe_k"},
// {id:7,title:"English News",url:"https://www.youtube.com/embed/kLp2UcVxUNM"},

// {id:8,title:"English News",url:"https://www.youtube.com/embed/gvIN8dznwm4"},
// {id:9,title:"English News",url:"https://www.youtube.com/embed/AVm8bOy8zrE"},
// {id:10,title:"English News",url:"https://www.youtube.com/embed/lHimO3XD7TM"},
// {id:11,title:"English News",url:"https://www.youtube.com/embed/ceOAoqrllPE"},
// {id:12,title:"English News",url:"https://www.youtube.com/embed/icvr4vBDLMU"},
// {id:13,title:"English News",url:"https://www.youtube.com/embed/X-unbS7ifso"},


]
const English = () => {
    const [english,setEnglish]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>English News</h1>
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
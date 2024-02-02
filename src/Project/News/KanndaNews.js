import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
{id:1,title:"Kannada News",url:"https://www.youtube.com/embed/jdJoOhqCipA"},
{id:2,title:"Kannada News",url:"https://www.youtube.com/embed/pN8Bo4CnAxI",},
{id:3,title:"Kannada News",url:"https://www.youtube.com/embed/BrKeVoepNR0"},
{id:4,title:"Kannada News",url:"https://www.youtube.com/embed/IpmC7xyjL4w"},
// {id:6,title:"Kannada News",url:"https://www.youtube.com/embed/ITKEYmbwe_k"},
// {id:7,title:"Kannada News",url:"https://www.youtube.com/embed/kLp2UcVxUNM"},

// {id:8,title:"Kannada News",url:"https://www.youtube.com/embed/gvIN8dznwm4"},
// {id:9,title:"Kannada News",url:"https://www.youtube.com/embed/AVm8bOy8zrE"},
// {id:10,title:"Kannada News",url:"https://www.youtube.com/embed/lHimO3XD7TM"},
// {id:11,title:"Kannada News",url:"https://www.youtube.com/embed/ceOAoqrllPE"},
// {id:12,title:"Kannada News",url:"https://www.youtube.com/embed/icvr4vBDLMU"},
// {id:13,title:"Kannada News",url:"https://www.youtube.com/embed/X-unbS7ifso"},


]
const KannadaNews = () => {
    const [KannadaNews,setKannadaNewss]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>Kannada News</h1>
    <div className='container-fluid'>
    <div className='row'>
      {KannadaNews.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe  width="900" height="500" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>
        </div>
})}
</div>
    </div>
    </div>
  )
}

export default KannadaNews;
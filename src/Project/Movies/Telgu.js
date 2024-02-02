import React from 'react'
import { useState } from 'react'
import '../Movies.css'

const mybiodta=[
{id:1,title:"Tamil Movies",url:"https://www.youtube.com/embed/RaChQXib_f8"},
{id:2,title:"Tamil Movies",url:"https://www.youtube.com/embed/iLUiY0IsVWg",},
{id:3,title:"Tamil Movies",url:"https://www.youtube.com/embed/H_j_dJMXBjs"},
{id:5,title:"Tamil Movies",url:"https://www.youtube.com/embed/Tpwu8WVtG-s"},
{id:6,title:"Tamil Movies",url:"https://www.youtube.com/embed/SAYIz0FKsZw"},
{id:7,title:"Tamil Movies",url:"https://www.youtube.com/embed/jvy8ekejYHY"},

{id:8,title:"Tamil Movies",url:"https://www.youtube.com/embed/tZquI3a1qZw"},
{id:9,title:"Tamil Movies",url:"https://www.youtube.com/embed/485bgt8sluo"},
{id:10,title:"Tamil Movies",url:"https://www.youtube.com/embed/W-Mq9JwNbAY"},

{id:11,title:"Tamil Movies",url:"https://www.youtube.com/embed/oVsA6B1cweo"},
{id:12,title:"Tamil Movies",url:"https://www.youtube.com/embed/dw3UH9TuW5"},
{id:13,title:"Tamil Movies",url:"https://www.youtube.com/embed/24FbX_WjqRw"},
{id:14,title:"Tamil Movies",url:"https://www.youtube.com/embed/Rv3DLPFbQgA"},
{id:15,title:"Tamil Movies",url:"https://www.youtube.com/embed/r8kCK3V7bzg"},
{id:16,title:"Tamil Movies",url:"https://www.youtube.com/embed/AOMz1iaz-IA"},
{id:17,title:"Tamil Movies",url:"https://www.youtube.com/embed/FCWVSdPQybE"},
{id:18,title:"Tamil Movies",url:"https://www.youtube.com/embed/FAs0k7FjjX8"},
{id:19,title:"Tamil Movies",url:"https://www.youtube.com/embed/E3eDbLVI70M"},
{id:20,title:"Tamil Movies",url:"https://www.youtube.com/embed/1qRT55I1LOk"},
{id:20,title:"Tamil Movies",url:"https://www.youtube.com/embed/wl7FV1LHcU4"},


]
const Telgu = () => {
    const [teluguMovies,setTeluguMovies]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
  
      <h1>TELUGU MOVIES</h1>
    <div className='container-fluid'>
<div className='row'>
{teluguMovies.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe width="420" height="345" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>

        </div>
})}
</div>
    </div>
    </div>
  )
}

export default Telgu;
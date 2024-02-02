import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
{id:1,title:"Hindi News",url:"https://www.youtube.com/embed/nyd-xznCpJc"},
{id:2,title:"Hindi News",url:"https://www.youtube.com/embed/Cy_6-_XUW-c",},
{id:3,title:"Hindi News",url:"https://www.youtube.com/embed/ubcVM81GWdo"},
{id:4,title:"Hindi News",url:"https://www.youtube.com/embed/X0Br5_l_ucI"},
{id:5,title:"Hindi News",url:"https://www.youtube.com/embed/Ft_7fhTuVv8"},
{id:5,title:"Hindi News",url:"https://www.youtube.com/embed/Ft_7fhTuVv8"},
{id:6,title:"Hindi News",url:"https://www.youtube.com/embed/plpMg73VdzI"},
{id:7,title:"Hindi News",url:"https://www.youtube.com/embed/oT4YEr0EkTQ"},
{id:8,title:"Hindi News",url:"https://www.youtube.com/embed/lyeyoqwXm5o"},



]
const HindiNews = () => {
    const [hindi,setHindi]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>Hindi News</h1>
    <div className='container-fluid'>
    <div className='row'>
      {hindi.map((ele)=>{
    return <div className='col' key={ele.id}>
        <iframe  width="900" height="500" src={ele.url} title={ele.title} className='frame' frameBorder="0" allowFullScreen/>
        </div>
})}
</div>
    </div>
    </div>
  )
}

export default HindiNews;
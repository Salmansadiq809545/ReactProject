import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
{id:1,title:"Songs",url:"https://www.youtube.com/embed/_B6T8O15Ohk"},
{id:2,title:"Songs",url:"https://www.youtube.com/embed/2r7fRPM6N5c",},
{id:3,title:"Songs",url:"https://www.youtube.com/embed/BddP6PYo2gs"},
{id:4,title:"Songs",url:"https://www.youtube.com/embed/cEWwJxEq9Lg"},
{id:5,title:"Songs",url:"https://www.youtube.com/embed/VICFSC7_kvw"},
{id:5,title:"Songs",url:"https://www.youtube.com/embed/nfNc0XJdZWk"},
{id:6,title:"Songs",url:"https://www.youtube.com/embed/RgzLnmTaCAU"},
{id:7,title:"Songs",url:"https://www.youtube.com/embed/YbuyYh-uUuc"},
{id:8,title:"Songs",url:"https://www.youtube.com/embed/zM6s3JgF9_0"},
{id:9,title:"Songs",url:"https://www.youtube.com/embed/7xNcMwyHQ6c"},
{id:10,title:"Songs",url:"https://www.youtube.com/embed/KUN5Uf9mObQ"},
{id:11,title:"Songs",url:"https://www.youtube.com/embed/l4BSJZnEX_c"},
{id:12,title:"Songs",url:"https://www.youtube.com/embed/3EueXxgltHg"},
{id:13,title:"Songs",url:"https://www.youtube.com/embed/0cbXeXP2Wgg"},
{id:14,title:"Songs",url:"https://www.youtube.com/embed/iWHopmKpOOU"},

{id:15,title:"Songs",url:"https://www.youtube.com/embed/NK5cxNJz1Uo"},
{id:16,title:"Songs",url:"https://www.youtube.com/embed/iWHopmKpOOU"},

{id:17,title:"Songs",url:"https://www.youtube.com/embed/7zp1TbLFPp8"},
{id:18,title:"Songs",url:"https://www.youtube.com/embed/WVGChZZfvbQ"},



]
const HindiNews = () => {
    const [hindi,setHindi]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>Songs</h1>
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
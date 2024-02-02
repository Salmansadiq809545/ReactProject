import React from 'react'
import { useState } from 'react'
import '../News.css'

const mybiodta=[
    {id:0,title:"PubG",url:"https://www.youtube.com/embed/vuCNoVoFp0Q"},
{id:1,title:"PubG",url:"https://www.youtube.com/embed/YRrbl5eUJZU"},
{id:2,title:"PubG",url:"https://www.youtube.com/embed/EWL_pHITwLs",},
{id:3,title:"PubG",url:"https://www.youtube.com/embed/6xJQRZoveJg"},
{id:4,title:"PubG",url:"https://www.youtube.com/embed/E0WgGuB-gFM"},
 {id:5,title:"PubG",url:"https://www.youtube.com/embed/RanxObqZXjA"},
 {id:6,title:"PubG",url:"https://www.youtube.com/embed/g-eemCbnnC4"},
 {id:7,title:"PubG",url:"https://www.youtube.com/embed/SYbn61Hk9Mg"},
 {id:8,title:"PubG",url:"https://www.youtube.com/embed/SL_vZPoRWKo"},
 {id:9,title:"PubG",url:"https://www.youtube.com/embed/14k_zKs5f7Q"},




]
const HindiNews = () => {
    const [hindi,setHindi]=useState(mybiodta)
  return (

    <div className='HindiMovies'>
      <h1>PUBG Live</h1>
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
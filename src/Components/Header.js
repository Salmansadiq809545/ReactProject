import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Nav>
<Logo>
    <img src="/images/logo.svg" alt="" />
</Logo>
<NavMenu>
    <a href='/home'><img src="/images/home-icon.svg" alt="" />
    <span>HOME</span></a>

    <a href='/home'><img src="/images/search-icon.svg" alt="" />
    <span>SEARCH</span></a>

    <a href='/home'><img src="/images/watchlist-icon.svg" alt="" />
    <span>WATCHLIST</span></a>

    <a href='/home'><img src="/images/original-icon.svg" alt="" />
    <span>ORIGINALS</span></a>

    <a href='/home'><img src="/images/movie-icon.svg" alt="" />
    <span>MOVIES</span></a>

    <a href='/home'><img src="/images/series-icon.svg" alt="" />
    <span>SERIES</span></a>
    
</NavMenu>
    </Nav>
  )
}
const Nav=styled.nav`
position: fixed;
top: 0;
right: 0;
left: 0;
padding: 0 36px;
background-color: #111;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
letter-spacing: 8.5px;
z-index: 3;
`
const Logo=styled.a`
width: 100px;
max-height: 70px;
margin-top: 4px;
display: inline-block;
font-size: 0;
padding: 0;
`
const NavMenu=styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin:0px;
padding:0px;
margin-right: auto;
margin-left: 25px;
position: relative;
@media (max-width:768px)
{
    display: none;
}
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
   
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
     
      position: relative;
      margin-left: 2px;
    
      transition: all 0.5s;
     :hover{
       
       border-bottom: 2px solid #fff; 
   }
    }
  
}

`
export default Header

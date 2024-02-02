import React from 'react'
import styled from 'styled-components'
const Login = () => {
  return (
    <Container>
      <Content>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg'/>
        <SignUp>GET ALL THERE</SignUp>
        <Desctiption>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</Desctiption>
          <CTALogoTwo src='/images/cta-logo-two.png'/>
      </CTA>
<BgImg/>
      </Content>
    </Container>
  )
}
const Container =styled.section`
overflow: hidden;
height: 100vh;
display: flex;
flex-direction:column;

`
const Content =styled.div`
margin-bottom: 10vw;
min-height: 100vh;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px 40px;
height: 100%;
`

const BgImg=styled.div`
background-image: url('/images/login-background.jpg');
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1;
height: 100%;
`
const CTA=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
max-width: 650px;
`

const CTALogoOne=styled.img`
margin-bottom: 10px;
min-height: 1px;
min-width: 600px;
display: block;
width: 100%;
`

const SignUp = styled.a`
border: 1px solid transparent;
border-radius:10px;
background-color: #0063e5;
color: #f9f9f9;
padding: 16.05px 0;
letter-spacing: 1.5px;
margin-bottom: 12px;
text-align: center;
font-size: 18px;
font-weight: bold;
:hover{
  background-color: #0483ee;
}
`
const Desctiption=styled.p`
margin: 0 0 24px;
letter-spacing: 1.5px;
line-height: 1.5;
font-size: 12px;
`
const CTALogoTwo=styled.img`
margin-bottom: 10px;
min-height: 1px;
min-width: 600px;
display: inline-block;
width: 100%;
`
export default Login
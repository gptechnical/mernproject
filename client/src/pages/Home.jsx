import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 80px;
  align-items: start;
  height: 100vh;
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const DivLeft = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 80px;
  @media (max-width: 768px){
    padding-left: 50px;
  }
  @media (max-width: 425px){  
    padding-left: 25px;
    padding-right: 25px;
  }
  p{
    font-size: 20px;
    line-height: 1.3;
    margin-top: 10px;
  } 
  .btn_text {
    background-color: #ffd900;
    color: #000000;
    padding: 7px 20px;
    font-weight: 900;
    margin-top: 10px;
  }
  h2 {
    font-weight: 600;
  }
  @media (max-width: 768px) {
     h2{
      font-size: 22px;
     }
     p {
      font-size: 18px;
      line-height: 1.1;
     }
  }
  @media (max-width: 425px) {
    h2{
      font-size: 22px;
    }
    p{
      font-size: 16px;
    }
  }
`;

const DivRight = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: circle();
  img{
    width: 75%;
  }

`;

const Home = () => {
  return (
    <>
    <Container>
        <DivLeft>
            <h2>WELCOME TO CODEGPTECH</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Molestias officia, earum libero laborum nesciunt, 
               cumque pariatur adipisci, quos eaque exercitationem ipsum! 
               Provident adipisci quos animi ratione 
               dicta veritatis molestias ducimus.</p>
             <button className='btn_text'>CONTACT ME</button>
        </DivLeft>
        <DivRight>
              <img src="./laptop.jpeg" alt=""/>
        </DivRight>
    </Container>
    </>
  )
}

export default Home

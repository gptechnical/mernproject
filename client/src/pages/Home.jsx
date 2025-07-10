import styled from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';


const Container = styled.div`
  background-color: #000000;
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
    font-size: 18px;
    line-height: 1.4;
    margin-top: 10px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  } 
  .btn_text {
    background-color: #673ab7;
    color:rgb(255, 255, 255);
    padding: 8px 30px;
    font-weight: 900;
    margin-top: 10px;
    border-radius: 30px;
    border: none;
    margin-top: 20px;
  }
  h2 {
    font-weight: 600;
  }
  .type_animate{
    font-size: 28px;
    }
  @media (max-width: 768px) {
     h2{
      font-size: 22px;
     }
     p {
      font-size: 16px;
      line-height: 1.1;
     }
      .type_animate{
    font-size: 20px;
    }
  }
  @media (max-width: 425px) {
    h2{
      font-size: 22px;
    }
    p{
      font-size: 16px;
      line-height: 1.2;
    }
  }
`;

const DivRight = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  img{
    width: 400px;
  }
    @media (max-width: 768px) {
   img {
   width: 300px;
   }
  }
  @media (max-width: 425px) {
   img {
   width: 250px;
   }
  }
`;

const HeadTwo = styled.h3`
   font-family: 'Inter', sans-serif;
   font-weight: 700;
   color: #ffffff;
   @media (max-width: 768px) {
  font-size: 15px;
  }
`;

const Home = () => {
  return (
    <>
    <Container>
        <DivLeft>
            <HeadTwo>WELCOME TO CODEGPTECH</HeadTwo>
          <TypeAnimation
              sequence={[ 
                'I am a Software Developer',
                1000, 
                'I am a Frontend Developer',
                1000,
                'I am a ReactJs Developer',
                1000,
                'I am a NextJs Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', 
                color: "#ffc700", fontWeight: "700", 
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", 
                marginTop: "5px" }}
              repeat={Infinity}
           className='type_animate' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Molestias officia, earum libero laborum nesciunt, 
               cumque pariatur adipisci, quos eaque exercitationem ipsum! 
               Provident adipisci quos animi ratione 
               dicta veritatis molestias ducimus.</p>
           <Link to="/contact"><button className='btn_text'>CONTACT ME</button></Link>
              
        </DivLeft>
        <DivRight>
              <img src="./laptop.png" alt=""/>
        </DivRight>
    </Container>
    </>
  )
}

export default Home

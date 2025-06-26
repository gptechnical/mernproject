import styled, { keyframes } from "styled-components";


const rotate = keyframes`
   0% {
        transform: perspective(400px) scaleX(1); 
    }
    100% {
        transform: perspective(400px) scaleX(-1);
    }
`;

const formboder = keyframes`
    0% {
      border-top-color:#ff5722;
 
    }
    50% {
      border-right-color:#FFA500;
      
    }
    100% {
      border-bottom-color:#ff5722;
    }
`;

export const Section = styled.section`
   margin-top: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Form = styled.form`
   background-color:#000000;
   padding: 30px 40px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   border: 3px solid #ffffff;
   box-sizing: border-box;
   border-radius: 30px;
   &:hover{
   animation: ${formboder} 3s linear;
   }

   .input_box {
    font-size: 18px;
    padding: 5px 25px 5px 0px;
    border: none;
    outline: none;
    color: #ffffff;
    border-bottom: 2px solid #FFA500;
    background-color:#000000;
    width: 300px;
    @media (max-width: 425px){
     width: 250px;
    }
   }
`;

export const Label = styled.label`
   color: #FFA500;
   font-size: 20px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-weight: 600;
`;

export const Input = styled.input`
   &::placeholder {
    color: #ffffff;
   }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 4px 30px;
  font-size: 18px;
  font-weight: 600;
  background-color: #ffffff00;
  border: 1px solid #ffffff66;
  color: #FFA500;
  cursor: pointer;
  &:hover {
   background-color: #ffffff;
   color: #000000;
  }
`;

export const Span = styled.span`
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  top: 250px;
  right: 42px;
`;

export const SpanIcon = styled.span`
   color: #ffffff;
   font-size: 20px;
   position: absolute;
   top: 310px;
   right: 42px;
`;

export const Img = styled.img`
  border: 4px solid #ffffff;
  border-radius: 50%;
  padding: 2px;
  animation: ${rotate} 3s linear infinite;
`;

export const Div = styled.div`
  color: #ffffff;
  display: flex;
  gap: 60px;
  margin-top: 10px;
 
  .forgot {
    color: #ffffff;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .remem{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  @media (max-width: 425px){
  font-size: 12px;
  font-weight: 600;
}
`;

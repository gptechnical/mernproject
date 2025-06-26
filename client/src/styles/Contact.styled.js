import styled from "styled-components";

export const Section = styled.section`
   margin-top: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Form = styled.form`
   margin-top: 30px;
   background-color:#000000;
   line-height: 2;
   padding: 30px 40px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   border: 3px solid #ffffff;
   border-radius: 30px;
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

export const Textarea = styled.textarea`
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

export const Heading = styled.h2`
   color: #ffffff;
   font-family: 'Lucida Sans', sans-serif;
   font-size: 30px;
   font-weight: 600;
`;



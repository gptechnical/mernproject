import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 400px;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    width: 90%;
    padding: 30px 25px;
  }

  .input_box {
    font-size: 16px;
    padding: 12px 16px;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    outline: none;
    width: 100%;
    background-color: #fff;
    color: #000;
    transition: all 0.3s ease;

    &::placeholder {
      color: #555;
    }
  }
`;

export const Label = styled.label`
  color: #000000;
  font-size: 16px;
  margin-top: 15px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  margin-top: 25px;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background: #0d6efd;
  border: none;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0d6efd;
    color: #ffffff;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  color: #0d6efd;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

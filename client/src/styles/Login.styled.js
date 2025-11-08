import styled from "styled-components";

export const Section = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  background: #ffffff;
  padding: 40px 35px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  border-radius: 50%;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #000000ff;
  display: block;
  margin: 10px 0 6px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px; /* space for icons */
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000ff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: #ffffff;
  }

  &::placeholder {
    color: #7a7a7a;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 40%;
  left: 12px;
  transform: translateY(-50%);
  color: #457b9d;
  font-size: 1.5rem;
`;

export const SpanIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #457b9d;
  font-size: 1.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1d3557;
  }
`;

export const Button = styled.button`
  background: #0d6efd;
  color: #fff;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0d6efd;
  }

  &:disabled {
    background: #b0bec5;
    cursor: not-allowed;
  }
`;

export const Div = styled.div`
  color: red;
  font-size: 0.85rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;

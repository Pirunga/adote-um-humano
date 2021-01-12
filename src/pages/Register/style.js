import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #184d47;
  font-family: "Amatic SC", cursive;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 6px;
`;

const Form = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 510px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 9px 13px 18px -5px rgba(64, 64, 64, 0.75);
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 20px;
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 5px;
  width: 200px;
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`;

const Errors = styled.span`
  font-size: 9px;
  color: black;
  font-weight: bolder;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 24px;
  width: 90px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: #96bb7c;
  :hover {
    background-color: #6c8759;
    cursor: pointer;
  }
`;

const Link = styled.span`
  font-size: 14px;
  margin: 10px 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export {
  Container,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Link,
};

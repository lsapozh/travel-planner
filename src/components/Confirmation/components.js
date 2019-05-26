import styled from "styled-components";

export const Modal = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  padding: 30px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  color: #666;
`;

export const ButtonGroup = styled.div`
  margin-top: 25px;
  & > button {
    outline: none;
    background: rgb(63, 81, 181);
    border: none;
    display: inline-block;
    padding: 6px 18px;
    color: #eee;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }
`;

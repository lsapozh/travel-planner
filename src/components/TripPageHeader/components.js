import styled from "styled-components";

export const Header = styled.div`
  padding: 20px 30px;
  background-color: rgb(63, 81, 181);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .icon {
    background-color: rgb(63, 81, 181);
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    margin: 0 20px 0 0;
    padding: 0;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  margin-left: 20px;
  color: rgb(63, 81, 181);
  &:active {
    background-color: rgb(221, 221, 221);
  }
`;

export const Title = styled.input`
  font-size: 26px;
  background-color: rgb(63, 81, 181);
  outline: none;
  border: none;
  color: white;
  &:focus {
    border-bottom: white solid 2px;
  }
`;

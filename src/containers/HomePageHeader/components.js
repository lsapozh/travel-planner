import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 30px;
  background-color: rgb(63, 81, 181);
  height: 100px;
`;

export const ButtonNewTrip = styled.button`
  height: 40px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  color: rgb(63, 81, 181);
  position: absolute;
  left: 30px;
  width: 200px;
  &:active {
    background-color: rgb(221, 221, 221);
  }
`;

export const SearchForm = styled.form`
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  padding: 0 5px;
  border: none;
  outline: none;
  font-size: 26px;
  background-color: rgb(63, 81, 181);
  color: white;
  border-bottom: white solid 1px;
  &:focus {
    border-bottom: white solid 2px;
  }
  &::placeholder {
    color: white;
  }
`;

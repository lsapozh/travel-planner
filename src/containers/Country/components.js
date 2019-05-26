import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 10px -50px;
  padding: 50px 0 30px 50px;

  &:focus-within {
    border-left: cornflowerblue solid 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Form = styled.form`
  display: inline;
`;

export const Input = styled.input`
  padding: 0 5px;
  border: none;
  border-bottom: rgb(169, 169, 169) solid 1px;
  &:hover {
    border-bottom: rgb(169, 169, 169) solid 2px;
  }
  &:focus {
    border-bottom: rgb(63, 81, 181) solid 2px;
  }
`;

import styled from "styled-components";

export const Form = styled.div`
  background-color: white;
  padding: 50px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Date = styled.div`
  padding-left: 50px;
  input {
    border: none;
    border-bottom: rgb(169, 169, 169) solid 1px;
    &:hover {
      border-bottom: rgb(169, 169, 169) solid 2px;
    }
    &:focus {
      border-bottom: rgb(63, 81, 181) solid 2px;
    }
  }
`;

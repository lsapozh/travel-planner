import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 130px;
  background-color: rgb(236, 238, 248);
  input {
    outline: none;
    width: 400px;
    height: 30px;
    font-size: 18px;
  }

  p {
    margin-bottom: 10px;
  }
`;

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

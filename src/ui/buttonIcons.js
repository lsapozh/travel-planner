import styled from "styled-components";

export const Button = styled.button`
  border: none;
  margin-left: 10px;
  height: 40px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0);
  .fa-trash-alt {
    color: #9d221e;
  }
  .fa-check {
    color: green;
    ${({ active }) => !active && "visibility: hidden"};
  }
  .fa-plus {
    color: cornflowerblue;
  }
  .fa-search {
    color: white;
  }

  &:active i {
    color: #003c00;
  }

  &:active .fa-arrow-left {
    color: #bdbdbd;
  }
`;

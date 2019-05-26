import styled from "styled-components";

export const Form = styled.form`
  display: inline-block;
  width: 640px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.div`
  height: fit-content;
  color: #565656;
  font-weight: 400;
  font-size: 14px;
  border: solid 1px rgba(145, 145, 145, 0.49);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;

  label {
    font-size: 12px;
    margin-bottom: 10px;
    color: #767676;
  }
  textarea {
    outline: none;
    resize: none;
    color: #3c3c3c;
    font-size: 16px;
    border: none;
  }
`;

export const Container = styled.div`
  display: block;
  vertical-align: bottom;
  padding: 20px 30px;
  margin-top: 20px;
`;

export const ContainerFocus = styled(Container)`
  &:focus-within {
    border-left: cornflowerblue solid 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Info = styled.div`
  display: inline-block;
  border: solid 1px rgba(145, 145, 145, 0.52);
  padding: 5px;
  vertical-align: bottom;
  width: 600px;
  &:focus-within {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-left: cornflowerblue solid 2px;
  }
`;

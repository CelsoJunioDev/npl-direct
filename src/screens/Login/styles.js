import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background-color: #fafafa;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const LeftBody = styled.div`
  display: flex;
  justify-content: center;

  #initial {
    height: 420px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  background-color: red;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
`;

export const ContentRight = styled.div`
  width: 220px;
  height: 220px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #c8d6e5;

  button {
    color: #fff;
    background-color: #3498db;
    width: 70%;
    padding: 4px;
    border-radius: 7px;
    border: none;
    cursor: pointer;

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  #text {
    width: 50%;
  }
  #logo {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 768px) {
    border: none;
    height: 100%;
    background-color: #fafafa;

    width: 100%;
    justify-content: center;

    #text {
      width: 75%;
      margin-bottom: 30px;
    }

    button {
      font-size: 16px;
      width: 75%;
      height: 50px;
      margin-top: 30px;
    }
  }
`;

import styled from "styled-components";

export const MessageSender = styled.div`
  display: flex;
  padding: 14px;
  input {
    flex-grow: 1;
    border-radius: 0;
    border: 1px solid #c2c2c2;
    border-radius: 7px;
    transition: 0.25s ease;
    outline: none;
    padding: 8px;
    color: #1e94d2;
    margin-right: 5px;
  }

  button {
    background-color: #1e94d2;
    color: #fff;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-size: 12px;
    padding: 0 16px;
    border-radius: 7px;
  }
`;

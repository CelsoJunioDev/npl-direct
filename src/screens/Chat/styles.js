import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 640px;
  height: 480px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 20%;
    transition: 0.25s ease;
    align-self: center;

    :hover {
      transform: scale(1.8);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    img{
        width: 30%;
    }
  }
`

export const MessageSender = styled.div`
background-color: #fff;
  position:sticky;
  bottom:0;
`

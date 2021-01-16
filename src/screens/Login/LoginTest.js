import React from "react";
import * as S from "./styles";
import Initial from "../../assets/ig_initial.png";
import Text from "../../assets/ig_text.png";
import Logo from "../../assets/ig_logo.png";
import AuthenticationService from "../../services/authentication";

export default function LoginTest() {
  function handleLogin() {
    AuthenticationService.loginWithGoogle();
  }

  return (
    <S.Container>
      <S.Body>
        <S.LeftBody>
          <img id="initial" src={Initial} alt="logo" />
        </S.LeftBody>

        <S.RightBody>
          <S.ContentRight>
            <img id="text" src={Text} alt="logo" />
            <img id="logo" src={Logo} alt="logo" />
            <button onClick={handleLogin}>Login com Google</button>
          </S.ContentRight>
        </S.RightBody>
      </S.Body>
    </S.Container>
  );
}

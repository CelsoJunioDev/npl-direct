import MessageSender from "../../components/MessageSender/MessageSender";
import Messages from "../../components/Messages";
import useMessages from "../../hooks/useMessages";
import Logo from "../../assets/ig_text.png";

import * as S from "./styles";

function Chat() {
  const { messages } = useMessages();

  return (
    <>
    <S.Container>
    <S.Chat>
      <img id="logo" src={Logo} alt="logo" />
    </S.Chat>
      <Messages messages={messages} />
    </S.Container>
      <S.MessageSender>
        <MessageSender />
      </S.MessageSender>
    </>
  );
}

export default Chat;

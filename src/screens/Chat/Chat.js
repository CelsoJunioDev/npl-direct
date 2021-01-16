import MessageSender from '../../components/MessageSender/MessageSender';
import Messages from '../../components/Messages';
import useMessages from '../../hooks/useMessages';
import Logo from '../../assets/ig_text.png'

import * as S from './styles'

function Chat () {
  const { messages } = useMessages()

  return <S.Container>
    <img src={Logo}/>
    <Messages messages={messages} />
    <MessageSender />
  </S.Container>
}

export default Chat
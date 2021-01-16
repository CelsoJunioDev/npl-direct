import { useState } from "react"
import MessagingService from '../../services/messaging'
import * as S from './styles'

function MessageSender () {
  const [message, setMessage] = useState('')
  
  function handleSubmit () {
    MessagingService.sendMessage(message)
    setMessage('')
  }

  return <S.MessageSender>
    <input
      type="text"
      value={message}
      placeholder="Mensagem..."
      onChange={e => setMessage(e.target.value)}
      onSubmit={handleSubmit}
    />

    <button onClick={handleSubmit}>
      Enviar
    </button>
  </S.MessageSender>
}

export default MessageSender


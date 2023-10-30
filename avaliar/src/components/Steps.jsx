import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import "./Steps.css"

const Steps = (currentStep) => {
  return (
    <div className="steps">
      <div className="step">
        <AiOutlineUser/>
        <p>identificação</p>
      </div>
      <div className="step">
        <AiOutlineStar/>
        <p>Avaliação</p>
      </div>
      <FiSend/>
      <div className="step">
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps

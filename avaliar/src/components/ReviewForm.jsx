import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
}from "react-icons/Bs"

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <p>Insatisfeito</p>
        </label>
      </div>
      <div>
        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
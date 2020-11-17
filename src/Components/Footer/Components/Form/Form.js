import React from 'react'
import './Form.scss'

function Form() {
  return (
    <form className="form">
      <div className="form__input">
        <label htmlFor="" className="form__input-label">Имя <span>(обязательно)</span></label>
        <input className="form__input-name" type="text" />
      </div>
      <div className="form__input">
        <label htmlFor="" className="form__input-label">Email <span>(обязательно)</span></label>
        <input className="form__input-mail" type="mail" />
      </div>
      <div className="form__input">
        <label htmlFor="" className="form__input-label">Телефон</label>
        <input className="form__input-tel" type="tel" />
      </div>
      <div className="form__textarea">
        <div className="form__textarea-label">Сообщение <span>(обязательно)</span></div>
        <textarea></textarea>
      </div>
      <button type="submit" className="form__btn btn">
        ОТПРАВИТЬ
      </button>
    </form>
  )
}

export default Form

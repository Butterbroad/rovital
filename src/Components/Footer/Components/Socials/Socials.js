import React from 'react'
import './style/Socials.scss'
import youtube from './style/img/youtube.svg'
import vk from './style/img/vk.svg'
import insta from './style/img/insta.svg'
import telegram from './style/img/telegram.svg'
import SocialsItem from './Components/SocialsItem/SocialsItem'

function Socials({ modClass }) {
  const icons = [youtube, vk, insta, telegram]
  return (
    <div className={`${modClass} socials`}>
      {icons.map((icon, index) => (
        <SocialsItem key={index} icon={icon} />
      ))}
    </div>
  )
}

export default Socials

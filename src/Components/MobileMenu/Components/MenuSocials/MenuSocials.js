import React from 'react'
import './style/MenuSocials.scss'
import youtube from './style/img/youtube.svg'
import vk from './style/img/vk.svg'
import insta from './style/img/insta.svg'
import telegram from './style/img/telegram.svg'
import MenuSocialsItem from './Components/MenuSocialsItem/MenuSocialsItem'


function MenuSocials({ classMod }) {
  const icons = [youtube, vk, insta, telegram]
  return (
    <div className={`${classMod} menu-socials`}>
      {icons.map((icon, index) => (
        <MenuSocialsItem key={index} icon={icon} />
      ))}
    </div>
  )
}

export default MenuSocials

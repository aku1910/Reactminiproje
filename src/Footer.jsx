import React from 'react'
import "./Footer.css"
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className='footer1'>
        <div className='footerword'>
          <img style={{ width: "200px" }} src="https://kofe.al/assets/images/logo/logo.png" alt="" />
          <p>Biz hər zaman istedadlı və yaradıcı insanların <br /> axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</p>
          <div className='icons'>
            <span style={{border:"1px solid gray", width:"40px" , height:"40px",borderRadius:"50%", display:'flex', justifyContent:"center", alignItems:"center"}}><FiFacebook /></span>
            <span style={{border:"1px solid gray", width:"40px" , height:"40px",borderRadius:"50%", display:'flex', justifyContent:"center", alignItems:"center"}}><AiOutlineInstagram /></span>
          </div>
        </div>
        <div className='footerword'>
      <h1>Xüsusiyyətlər</h1>
      <p>Destek</p>
      <p>Abunelik</p>
      <p>Mağaza</p>
      <p>QR kodlar</p>
      <p>Patreon Alternativi</p>
        </div>
        <div className='footerword'>
        <h1>İnteqrasiyalar</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>TikTok</p>
        <p>Telegram</p>
        <p>Wordpress</p>
        </div>
        <div className='footerword'>
         <h1>Kofeal</h1>
         <p>Haqqımızda</p>
         <p>Qaydalar</p>
         <p>Məxfilik</p>
        </div>
      </div>
      <div style={{marginLeft:"100px", fontSize:"17px", color:"gray"}}>
      Copyright © 2024 <a style={{color:"black"}} href="">BONPARA</a>  layihəsi. Bütün hüquqlar qorunur.
      </div>
    </div>

  )
}

export default Footer
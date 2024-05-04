import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: localStorage.getItem('lang') || 'az',
      isOpen: false
    };
  }

  changeLanguage = (event) => {
    const selectedLang = event.currentTarget.value;
    localStorage.setItem('lang', selectedLang);
    this.setState({ lang: selectedLang });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { lang, isOpen } = this.state;
    const languageOptions = {
      az: {
        members: 'Üzvlərimiz',
        blog: 'Blog',
        faq: 'FAQ',
        signIn: 'Daxil ol',
        signUp: 'Qeydiyyat'
      },
      en: {
        members: 'Creators',
        blog: 'Blog',
        faq: 'FAQ',
        signIn: 'Sign In',
        signUp: 'Sign Up'
      },
      tr: {
        members: 'Üyelerimiz',
        blog: 'Blog',
        faq: 'SSS',
        signIn: 'Giriş Yap',
        signUp: 'Kayıt Ol'
      },
      ru: {
        members: 'Наши Участники',
        blog: 'Блог',
        faq: 'Вопросы и ответы',
        signIn: 'Войти',
        signUp: 'Регистрация'
      }
    };

    return (
      <div className='header'>
        <div className='header-container border'>
          <div className='logo'>
            <NavLink to='/'><img src="https://kofe.al/assets/images/logo/logo.png?v=1.0" alt="" /></NavLink>
          </div>
          <div className='nav-links'>
            <NavLink to='/Creators'>{languageOptions[lang].members}</NavLink>
            <NavLink to='/Blog'>{languageOptions[lang].blog}</NavLink>
            <NavLink to='/Faq'>{languageOptions[lang].faq}</NavLink>
          </div>
          <div className='language'>
            <select className="language-select" onChange={this.changeLanguage} value={lang}>
              <option value="az">Azərbaycan</option>
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
              <option value="ru">Русский</option>
            </select>
            <NavLink to='/Signin'><button className="signin-btn">{languageOptions[lang].signIn}</button></NavLink>
            <NavLink to='/Signup'><button className="signup-btn">{languageOptions[lang].signUp}</button></NavLink>
          </div>
          <div className='hamburger'>
            <p><RxHamburgerMenu onClick={this.toggleMenu} /></p>
          </div>
        </div>
        <div className={`menusidebar ${isOpen ? "open" : ""}`}>
          <div className='flex gap-5 flex-col items-center'>
            <div className='flex gap-10 mt-[40px]'>
              <img className='w-[180px]' src="	https://kofe.al/assets/images/logo/logo.png?v=1.0" alt="" />
              <button style={{ cursor: "pointer" }} className="close-btn text-[20px]" onClick={this.toggleMenu}>x</button>
            </div>
            <div className='flex justify-center text-gray-500'>
              <p>Sevdiyin işlə məşğul ol, <br /> izləyicilərindən dəstək qazan!</p>
            </div>
            <div className=''>
              <select className="w-[130px] text-gray-500 font-bold" onChange={this.changeLanguage} value={lang}>
                <option value="az">Azərbaycan</option>
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
                <option value="ru">Русский</option>
              </select>
              <div className='flex gap-5 flex-col mt-[40%]'>
                <NavLink to='/Creators'>{languageOptions[lang].members}</NavLink>
                <NavLink to='/Blog'>{languageOptions[lang].blog}</NavLink>
                <NavLink to='/Faq'>{languageOptions[lang].faq}</NavLink>
              </div>
              <div className=''>
                <NavLink to='/Signin'><button className="signin-btn">{languageOptions[lang].signIn}</button></NavLink>
                <NavLink to='/Signup'><button className="signup-btn">{languageOptions[lang].signUp}</button></NavLink>
              </div>
              <div className='mt-[10%]'>
                <p className='text-gray-500 text-[12px]'>BIZI IZLƏYIN</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

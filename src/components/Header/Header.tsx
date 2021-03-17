import React from "react";
import './Header.css';
import logo from "../assets/images/logo.png";


interface HeaderProps {
    switchLanguage: switchLanguage;
    language:language;
}

export const Header: React.FC<HeaderProps> = ({ language, switchLanguage }) => {


    return (
        <nav>
      <img className="nav-logo" src={logo} alt="logo" />
      <div className="nav-languages-choice">
        <button
          className={
            language === "nl" ? "active nav-lang-button" : "nav-lang-button"
          }
          onClick={switchLanguage}
          value="nl"
        >
          nl
        </button>
        <button
          className={
            language === "fr" ? "active nav-lang-button" : "nav-lang-button"
          }
          onClick={switchLanguage}
          value="fr"
        >
          fr
        </button>
        <button
          className={
            language === "en" ? "active nav-lang-button" : "nav-lang-button"
          }
          onClick={switchLanguage}
          value="en"
        >
          en
        </button>
      </div>
    </nav>
    )
}


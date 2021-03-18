import React from "react";
import "./Home.css";
import phoneImg from "../../assets/images/phone.png";
import orangeLogo from "../../assets/images/orange.png";
import playmobilLogo from "../../assets/images/playmobil.png";
import edfLogo from "../../assets/images/edf.png";

interface HomeProps {
    currentTemplate: Template;
    isSwitching: isSwitching;
}

export const Home: React.FC<HomeProps> = ({ currentTemplate, isSwitching }) => {

    return (
        <div className="home">

            <div className="consumers">
                <div className={isSwitching ? "right-switch-text consumer-text" : "consumer-text"}>
                    <p>{currentTemplate.customer.title}</p>
                    <div className="home-slogan">
                        <h3>{currentTemplate.customer.slogan}</h3>
                        <h3>{currentTemplate.customer.slogan2}</h3>
                    </div>
                    <a href="https://stampix.com" className="home-button">
                        {currentTemplate.customer.buttonText}
                    </a>
                </div>
                <div className={isSwitching ? "right-switch-text consumer-img-container" : "consumer-img-container"}>
                    <img
                        className="consumer-phone-img"
                        src={phoneImg}
                        alt="Phone_image"
                    />
                </div>
            </div>

            <div className="business">
                <div className={isSwitching ? "left-switch-text business-text" : "business-text"}>
                    <p>{currentTemplate.business.title}</p>
                    <div className="home-slogan">
                        <h3>{currentTemplate.business.slogan}</h3>
                        <h3>{currentTemplate.business.slogan2}</h3>
                    </div>
                    <a href="https://business.stampix.com" className="home-button">
                        {currentTemplate.business.buttonText}
                    </a>
                </div>
                <div
                    className={isSwitching ? "left-switch-text business-logos-container" : "business-logos-container"}>
                    <div className="img-container">
                        <img className="business-logos" src={orangeLogo} alt="Orange" />
                    </div>
                    <div className="img-container">
                        <img
                            className="business-logos"
                            src={playmobilLogo}
                            alt="Playmobil"
                        />
                    </div>
                    <div className="img-container">
                        <img className="business-logos" src={edfLogo} alt="EDF" />
                    </div>
                </div>
            </div>
        </div>
    );
}


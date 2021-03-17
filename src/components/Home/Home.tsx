import React from "react";

interface HomeProps {
    currentTemplate: Template;
}

export const Home: React.FC<HomeProps> = ({ currentTemplate }) => {

    return (
        <div className="home">

            <div className="consumers">
                <div className="consumer-text">
                    <p>{currentTemplate.customer.title}</p>
                    <h3>{currentTemplate.customer.slogan}</h3>
                    <h3>{currentTemplate.customer.slogan2}</h3>
                    <a href="https://stampix.com">
                        <button className="home-button">
                            {currentTemplate.customer.button}
                        </button>
                    </a>
                </div>

                <div className="consumer-img-container">
                    {/* image here */}
                </div>
            </div>

            <div className="business">
                <div className="business-text" >

                    <p>{currentTemplate.business.title}</p>
                    <h3>{currentTemplate.business.slogan}</h3>
                    <h3>{currentTemplate.business.slogan2}</h3>
                    <a href="https://business.stampix.com">
                        <button className="home-button">
                            {currentTemplate.business.button}
                        </button>
                    </a>
                </div>
                <div className="business-logos-container">
                    {/* logo image here */}
                </div>
            </div>

        </div>
    );
}


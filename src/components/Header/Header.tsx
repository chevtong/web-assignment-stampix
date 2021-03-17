import React from "react";

interface HeaderProps {
    switchLanguage: switchLanguage;
}

export const Header: React.FC<HeaderProps> = ({ switchLanguage }) => {


    return (
       
        <nav>
            <div className="nav-languages-choice">
                <button onClick={switchLanguage} value="nl">nl</button>
                <button onClick={switchLanguage} value="fr">fr</button>
                <button onClick={switchLanguage} value="en">en</button>
            </div>
        </nav>
       
    )
}


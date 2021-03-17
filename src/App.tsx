import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import {enTemplate, frTemplate, nlTemplate} from "./components/Templates/Templates"

import './App.css';

const initialLang: string = "en";

const App: React.FC = () => {

  const [language, setLanguage] = useState(initialLang);
  const [currentTemplate, setCurrentTemplate] = useState(enTemplate);

  const switchLanguage: switchLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const switchTemplate = () => {
        switch (language) {
          case "en":
            setCurrentTemplate(enTemplate);
            break;
    
          case "fr":
            setCurrentTemplate(frTemplate);
            break;
    
          case "nl":
            setCurrentTemplate(nlTemplate);
            break;
    
          default:
            return enTemplate;
        }
  };

  useEffect(() => {
    switchTemplate();
  }, [language]);

  return (
    <div className="App">
      <React.Fragment>
        <Header switchLanguage={switchLanguage} />
        <Home currentTemplate={currentTemplate}/>
      </React.Fragment>
    </div>
  );
}

export default App;
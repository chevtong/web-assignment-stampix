import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import {enTemplate, frTemplate, nlTemplate} from "./components/Templates/Templates"

import './App.css';

const initialLang: string = "en";

const App: React.FC = () => {

  const [language, setLanguage] = useState<language>(initialLang);
  const [currentTemplate, setCurrentTemplate] = useState<Template>(enTemplate);
  const [isSwitching, setIsSwithcing] = useState<isSwitching>(false)

  useEffect(() => {

    switchTemplate(language);
    const timer = setTimeout(() => {
      setIsSwithcing(!true);
    }, 800);
    return () => clearTimeout(timer);

  }, [language]);

  const switchLanguage: switchLanguage = (e) => {
    setLanguage(e.target.value);
    setIsSwithcing(true)
  };

  const switchTemplate = (language:string) => {
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

  return (
    <div className="App">
      <React.Fragment>
        <Header switchLanguage={switchLanguage} language={language}/>
        <Home currentTemplate={currentTemplate} isSwitching={isSwitching} />
      </React.Fragment>
    </div>
  );
}

export default App;
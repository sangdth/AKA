import { useState, useEffect } from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';

const Popup = () => {
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    let ignore = false;

    async function getCurrentTab() {
      const queryOptions = { active: true, lastFocusedWindow: true };

      const [tab] = await chrome.tabs.query(queryOptions);

      if (!ignore) {
        setCurrentTab(tab.id.toString());
      }

      return tab;
    }

    getCurrentTab();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current tab ID: {currentTab} </p>
      </header>
    </div>
  );
};

export default Popup;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TocPanel from './components/TocPanel/tocPanel';
import {tocStyle} from './components/styles/tocStyles'

function App() {
  return (
    <div className="App">
      <TocPanel 
      panel={tocStyle.panel} 
      profileBadge={tocStyle.profileBadge} 
      avatar={tocStyle.avatar}
      fileAction={tocStyle.fileAction}
      folderStyle={tocStyle.folderStyle}
      dropDownShow = {tocStyle.dropDownShow}
      ></TocPanel>
    </div>
  );
}

export default App;

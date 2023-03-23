import React from 'react';
import Skill from './components/skill_display'
import SkillSelector from './components/skill_selector'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello! </h1>
      <SkillSelector />
      {/* <Skill 
        skillName='Test'
        skillBase={3}
        coinCount={2}
        coinStrength={4}
      /> */}

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../styles/Skills.css'; // Import the CSS file for Skills component

function Skills() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Java']);

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  return (
    <div className="skills-container">
      <h2 className="skills-heading">SKILLS</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
      <div className="add-skill-container">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a skill"
        />
        <button className="add-skill-button" onClick={handleAddSkill}>
          ADD SKILLS
        </button>
      </div>
    </div>
  );
}

export default Skills;

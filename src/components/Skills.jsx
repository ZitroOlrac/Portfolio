import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML 5', icon: 'assets/html-5.png', color: '#ffefd5' },
    { name: 'CSS 3', icon: 'assets/css.png', color: '#e0ffff' },
    { name: 'JavaScript', icon: 'assets/technology.png', color: '#fffacd' },
    { name: 'React', icon: 'assets/atom.png', color: '#f0f8ff' },
    { name: 'Node JS', icon: 'assets/node-js.png', color: '#f5fffa' },
    { name: 'C#', icon: 'assets/c-sharp.png', color: '#e6e6fa' },
    { name: 'C++', icon: 'assets/c++.png', color: '#f0f8ff' },
    { name: 'Unity', icon: 'assets/unity.png', color: '#f5f5f5' },
    { name: 'AR / Vuforia', icon: 'assets/android.png', color: '#fff0f5' },
    { name: 'Git', icon: 'assets/git.png', color: '#fff5ee' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Software & <span className="text-accent">Skills</span></h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="bento-box skill-card" key={index} style={{ backgroundColor: skill.color }}>
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

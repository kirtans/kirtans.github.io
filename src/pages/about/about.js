import React from "react";
import '../../Base.css';

const About = () => {
  return (
    <div className="body">
      <div className="content">
        <h2>About</h2>
        <div className="aboutBody">
          <p>
            Hi! I am Kirtan Patel. I graduated from Georgia Tech in 2018 with a Bachelors in Computer Science. I have worked at Peloton and am currently working at Bolt. Technology and fitness are my main two passions and I strive to share topics that I find are important to make the world a little better through technology and education. 
            <br/>
            <br/>
            I will also be adding some of my other passions and ventures to this site!
          </p>
          <img className="aboutImage" src={require('./profile_pic.jpg')} />
        </div>
      </div>
    </div>
  );
}

export default About;

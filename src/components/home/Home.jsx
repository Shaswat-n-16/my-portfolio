// Home.js
import React from "react";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import image from "../../assets/Profilepicture.jpg";

const Home = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1q2wVIYuuduM4wnbsVNAGAsIJ5ESvcFCM/view?usp=sharing";

  const handleViewCvClick = (event) => {
    event.preventDefault();
    window.open(resumeLink, "_blank");
  };
  return (
    <div className="home">
      <div className="animation-container">
        {/* Placeholder for image animation */}
        <img src={image} alt="Your Name" className="profile-image" />
      </div>
      <div className="content-container">
        <div className="name">Hi , I'm Shaswat Nandan</div>
        <div className="summary">
          I am not just a web developer, I am a web artist. I use the MERN stack
          as my canvas, and I paint with code. I create stunning websites that
          are fast, secure, and interactive. I have a knack for solving complex
          problems with elegant solutions, and I always strive to learn new
          skills and technologies. I have worked on various projects, from
          social media platforms to e-commerce websites, and I have delivered
          high-quality results. I am a team player, a communicator.
        </div>
        {/* <div className="cv-button"> */}
        <button className="cv-button" onClick={handleViewCvClick}>
          <span className="button-text">View CV</span>
          <span className="file-icon">&#128462;</span>
        </button>

        <div className="social-buttons">
          <SocialIcon url="https://github.com" />
          <SocialIcon url="https://linkedin.com" />
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://leetcode.com" />
        </div>
      </div>
    </div>
  );
};

export default Home;

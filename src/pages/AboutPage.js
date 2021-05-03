import React from 'react'
import Title from "../components/Title";
import SkillsSection from "../components/SkillsSection";

function AboutPage()  {
    return (
        <div className="AboutPage">
            <Title title={"About Me"}  />
            <p className="about-details">I'm a student web developer currently enrolled in KU's Full Stack Coding Bootcamp. I love to paint, draw, and create digital art in my spare time, and I work as an IT Support Specialist for a local credit union. I'm based in Bonner Springs, KS but was born and raised in Wichita, KS. I moved to the KC Metro in April 2019 to be closer to family. Since moving here, I have made great friends, got a good job with a company that I love, and picked up new hobbies. I have two cats who are the light of my life.

            My natural eye for design and ability to quickly learn new technologies led to my decision to enroll in classes for web development. So far, I am getting the hang of things pretty quickly and I can't wait to learn more and create some cool pages and programs.</p>
            <br />
            <Title title={"My Skills"} />
            <div className="skillsContainer">
                <SkillsSection skill={"Javascript"} progress={"80%"} width={"80%"} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Express'} progress={'85%'} width={'85%'} />
            </div>
        </div>
    )
}

export default AboutPage;
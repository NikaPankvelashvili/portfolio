import React, { useEffect, useRef } from 'react';
import Header from './components/header/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import SkillBars from './components/SkillBars';
import PhotoWithText from './components/PhotoWithText';
import ChillPhoto from './images/chill-photo.jpg'
import SecondPhoto from './images/laptop_code_programming_212332_1440x900.jpg'
import ProjectSlider from './components/ProjectSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MoreAbout from './components/MoreAbout';


function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const honoursRef = useRef(null);
  const contactRef = useRef(null);

  const aboutMeHandler = () => {
    aboutMeRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const projectsHandler = () => {
    projectsRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const honoursHandler = () => {
    honoursRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactHandler = () => {
    contactRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlers = [aboutMeHandler, projectsHandler, honoursHandler, contactHandler]


  useEffect(() => {
    const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
    const hiddenElementsRight = document.querySelectorAll(".hidden-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });

    hiddenElementsLeft.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el) => observer.observe(el));

  }, []);





  return (
    <div>
      <Header handlers={handlers} />
      <PhotoWithText
        style={{ marginTop: "67px" }}
        image={ChillPhoto}
        headline="Nikoloz Pankvelashvili"
        subtext="Portfolio"
      />
      <section ref={aboutMeRef} className='fullscreen-aboutme hidden-left'>
        <AboutMe /* ref={aboutMeRef} */ />
        <SkillBars />
      </section>
      <PhotoWithText
        image={SecondPhoto}
        headline="Projects"
        subtext=""
      />
      <div style={{ scrollMargin: "115px" }} ref={projectsRef}>
        <ProjectSlider /* ref={projectsRef} */ />
      </div>
      <MoreAbout ref={honoursRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
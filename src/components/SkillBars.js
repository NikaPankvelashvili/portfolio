import React from 'react'
import SkillBox from './SkillBox';
import { useInView } from 'react-intersection-observer';
import "./SkillBox.css";

function SkillBars() {
  const [testRef, inView] = useInView();

  return (
    <section className='skillbar-background'>
      <div ref={testRef} className={inView ? 'skillbar-container' : 'skillbar-container'}>
        <h2 className='skills-title'>Skills</h2>
        <SkillBox name="JAVA" percent="80%" delay="0.1s" />
        <SkillBox name="TypeScript" percent="80%" delay="0.1s" />
        <SkillBox name="Python" percent="85%" delay="0.2s" />
        <SkillBox name="Verilog" percent="40%" delay="0.3s" />
        <SkillBox name="React" percent="65%" delay="0.4s" />
        <SkillBox name="Next.js" percent="65%" delay="0.4s" />
        <SkillBox name="OCAML" percent="45%" delay="0.5s" />
        {/* <SkillBoxNew name={"JAVA"} />
        <SkillBoxNew name={"Python"} />
        <SkillBoxNew name={"Verilog"} />
        <SkillBoxNew name={"React"} />
        <SkillBoxNew name={"OCAML"} /> */}
      </div>
    </section>
  )
}

export default SkillBars;
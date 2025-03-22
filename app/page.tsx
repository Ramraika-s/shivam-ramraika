'use client'; // Ensures the code runs on the client side

import ContentStump from '../components/content-stump';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import Experience from '../components/sections/experience';
import Education from '../components/sections/education';
import Events from '../components/sections/events';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <>
      <ContentStump id="about" title="About Me" hideTitle>
        <About />
      </ContentStump>
      <ContentStump id="projects" title="Magical Projects">
        <Projects />
      </ContentStump>
      <ContentStump id="skills" title="Enchanted Skills">
        <Skills />
      </ContentStump>
      <ContentStump id="experience" title="Mystical Experiences">
        <Experience />
      </ContentStump>
      <ContentStump id="education" title="Arcane Knowledge">
        <Education />
      </ContentStump>
      <ContentStump id="events" title="Magical Gatherings">
        <Events />
      </ContentStump>
      <ContentStump id="contact" title="Send a Message">
        <Contact />
      </ContentStump>
    </>
  );
}

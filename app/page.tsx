'use client'; // Ensures the code runs on the client side

import { useEffect } from 'react';
import ContentStump from '../components/content-stump';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import Experience from '../components/sections/experience';
import Education from '../components/sections/education';
import Events from '../components/sections/events';
import Contact from '../components/sections/contact';

export default function Home() {
  useEffect(() => {
    // Add the Google Analytics library dynamically
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KMNZH3MGX6';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    // Add inline configuration script for Google Analytics
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KMNZH3MGX6');
    `;
    document.head.appendChild(configScript);

    return () => {
      // Cleanup: Remove the scripts when the component unmounts (optional, but avoids issues)
      document.head.removeChild(gtagScript);
      document.head.removeChild(configScript);
    };
  }, []); // Runs only once when the component mounts

  return (
    <>
    <Head>
        {/* Add the Google Site Verification meta tag */}
 <meta name="google-site-verification" content="r6UvpAi_sOxqo2KPO1LByWNFE2v56FgnbKCnOWh3EyI" />
      </Head>

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
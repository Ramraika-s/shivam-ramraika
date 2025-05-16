export const metadata = {
  title: "Shivam Ramraika – Developer Portfolio",
  description: "Welcome to the personal portfolio of Shivam Ramraika – a Computer Science student, frontend developer, and tech enthusiast.",
  openGraph: {
    title: "Shivam Ramraika – Developer Portfolio",
    description: "Frontend developer and computer science student showcasing projects, skills, and experience.",
    url: "https://shivam-ramraika.vercel.app/",
    siteName: "Shivam Ramraika Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam Ramraika Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Ramraika – Developer Portfolio",
    description: "Explore Shivam's projects, skills, and achievements in tech.",
    images: ["/og-image.jpg"],
    creator: "@yourTwitterHandle", // Replace with your handle or remove this line
  },
};

'use client';

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

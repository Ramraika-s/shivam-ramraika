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
    // creator: "@yourTwitterHandle", // Replace with your handle or remove this line
  },
};

import ClientHome from './client-home';

export default function HomePage() {
  return <ClientHome />;
}

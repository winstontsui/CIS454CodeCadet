import React, { useState } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import Modal from '@/components/Modal/ModalCommunityPage';

const CatalogPage: React.FC = () => {
  const events = [
    {
      difficulty: "Beginner Level",
      title: "C",
      description: "A discussion on the fundamentals of the C programming language."
    },
    {
      difficulty: "Apprentice Level",
      title: "HTML",
      description: "Exploring the core concepts and structure of HTML for web development."
    },
    {
      difficulty: "Intermediate Level",
      title: "Python",
      description: "An introductory session diving into Python programming."
    },
    {
      difficulty: "Expert Level",
      title: "C++",
      description: "Understanding the object-oriented programming paradigm using C++."
    },
    {
      difficulty: "Advanced Level",
      title: "Java",
      description: "A comprehensive overview of Java programming language features."
    },
    {
      difficulty: "Beginner Level",
      title: "React",
      description: "Mastering React.js for building interactive user interfaces."
    },
    {
      difficulty: "Apprentice Level",
      title: "CSS",
      description: "Exploring Cascading Style Sheets (CSS) for web styling."
    },
    {
      difficulty: "Intermediate Level",
      title: "JavaScript",
      description: "In-depth learning of JavaScript for web development."
    },
    {
      difficulty: "Expert Level",
      title: "SQL",
      description: "Understanding Structured Query Language (SQL) for database management."
    },
    {
      difficulty: "Advanced Level",
      title: "Git",
      description: "Mastering version control using Git."
    },
    {
      difficulty: "Beginner Level",
      title: "PHP",
      description: "An introduction to server-side scripting with PHP."
    },
    {
      difficulty: "Apprentice Level",
      title: "UI/UX",
      description: "Design principles and user experience fundamentals."
    },
    {
      difficulty: "Intermediate Level",
      title: "Ruby",
      description: "Introduction to the Ruby programming language and its elegance."
    },
    {
      difficulty: "Expert Level",
      title: "Swift",
      description: "Learning the Swift programming language for iOS app development."
    },
    {
      difficulty: "Advanced Level",
      title: "Rust",
      description: "Discovering the power and safety features of the Rust programming language."
    },
    {
      difficulty: "Beginner Level",
      title: "TypeScript",
      description: "Understanding TypeScript for scalable JavaScript application development."
    },
    {
      difficulty: "Apprentice Level",
      title: "Angular",
      description: "Exploring the Angular framework for building dynamic web applications."
    },
    // Add more languages or topics in a similar format...
  ];
  const [showModals, setShowModals] = useState<boolean[]>(Array(events.length).fill(false));

  const toggleModal = (index: number) => {
    const updatedModals = [...showModals];
    updatedModals[index] = !updatedModals[index];
    setShowModals(updatedModals);
  };
  
  const eventCards = events.map((event, index) => (
    <div key={index} className="p-4 bg-black rounded-xl shadow-md flex items-front">
      <div>
        <div className="text-xs font-semibold mb-4">{event.difficulty}</div>
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-700">{event.description}</p>
        <button onClick={() => toggleModal(index)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          More Details
        </button>
        <Modal show={showModals[index]} onClose={() => toggleModal(index)} eventText={event.description} />

      </div>
    </div>
  ));
  return (
    <main>
      <Topbar />
      <div className="bg-gray-900 min-h-screen text-white">
        <div
          className="flex justify-center items-center h-44 bg-cover bg-center"
          style={{ backgroundImage: 'url("/community-background.jpg")' }}
        >
          {/* Replace "/community-background.jpg" with the actual path to your background image */}
          <h1 className="text-4xl font-bold text-white">
            Catalog Page
          </h1>
          
        </div>
        <div className="container mx-auto mt">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://discord.gg/YFTnyWDW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                className="text-blue-500 hover:text-blue-400"
              />
            </a>
            <a
              href="https://www.facebook.com/winston.tsui.796"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-blue-500 hover:text-blue-400"
              />
            </a>
            <a
              href="https://www.instagram.com/lawrencee_chen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-pink-500 hover:text-pink-400"
              />
            </a>
            <a
              href="https://twitter.com/elonmusk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="text-blue-400 hover:text-blue-300"
              />
            </a>
            <a
              href="https://www.patreon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPatreon}
                size="2x"
                className="text-orange-500 hover:text-orange-400"
              />
            </a>
          </div>
          <h4 className="mb-4 text-2xl font-semi-bold text-white">
            Current Courses:
          </h4>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your community content here, e.g., cards, posts, etc. */}
            {eventCards}

          </section>

        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import Topbar from "@/components/Topbar/Topbar";
import Modal from '@/components/Modal/ModalCommunityPage';



const CommunityPage: React.FC = () => {
  const events = [
    {
      date: "DEC 1, 2023 - VIRTUAL",
      title: "Tech Trends: AI & Machine Learning",
      description: "Explore the cutting-edge trends in AI and Machine Learning! Join us for an insightful session on the future of these transformative technologies."
    },
    {
      date: "DEC 2, 2023 - VIRTUAL",
      title: "Cybersecurity Symposium",
      description: "Fortify your digital defenses! Engage with cybersecurity experts and dive into discussions about the latest threats and defense strategies."
    },
    {
      date: "DEC 3, 2023 - VIRTUAL",
      title: "Coding Bootcamp Kickoff",
      description: "Begin your coding journey with a bang! Join our intensive bootcamp and take the first steps towards becoming a proficient coder."
    },
    {
      date: "DEC 4, 2023 - VIRTUAL",
      title: "Data Analytics Deep Dive",
      description: "Delve into the world of data! Learn essential techniques and tools for effective data analysis and decision-making."
    },
    {
      date: "DEC 5, 2023 - VIRTUAL",
      title: "Virtual Reality Workshop",
      description: "Step into the realms of Virtual Reality! Discover the principles and applications of VR in this immersive workshop."
    },
    {
      date: "DEC 6, 2023 - VIRTUAL",
      title: "Ethical Hacking Seminar",
      description: "Uncover the ethical side of hacking! Learn about responsible hacking practices and ethical considerations in cybersecurity."
    },
    {
      date: "DEC 7, 2023 - VIRTUAL",
      title: "Cloud Computing Symposium",
      description: "Explore the sky of cloud technology! Dive deep into the concepts and innovations driving the world of cloud computing."
    },
    {
      date: "DEC 8, 2023 - VIRTUAL",
      title: "AI-Powered Marketing",
      description: "Revolutionize marketing with AI! Learn how artificial intelligence is reshaping the marketing landscape."
    },
    {
      date: "DEC 9, 2023 - VIRTUAL",
      title: "IoT Innovations Conference",
      description: "Witness the future of connected devices! Join the IoT conference to explore the latest innovations and trends."
    },
    {
      date: "DEC 10, 2023 - VIRTUAL",
      title: "Blockchain Basics",
      description: "Demystify blockchain technology! Dive into the fundamentals of blockchain and its transformative potential."
    },
    {
      date: "DEC 10, 2023 - VIRTUAL",
      title: "Tuesday Full-Stack Study Session",
      description: "Step into the world of Full-Stack development! Immerse yourself in a journey that unlocks the realms of both front-end and back-end marvels. Join us weekly for a collaborative learning experience as we unveil the secrets of crafting dynamic web applications."
    },
    {
      date: "DEC 12, 2023 - VIRTUAL",
      title: "Live Course | ChatGPT & Generative AI",
      description: "Unleash your coding prowess in solving mind-bending LeetCode problems! Engage with Baruch AIS SWD associate Wylie as we explore the captivating world of ChatGPT and Generative AI."
    },
    {
      date: "DEC 15, 2023 - VIRTUAL",
      title: "LeetCode Session #5",
      description: "Dive deep into the labyrinth of full-stack development! Join us weekly for an interactive learning spree as we decode the intricacies of the Full-Stack Chapter together."
    },
    {
      date: "DEC 18, 2023 - VIRTUAL",
      title: "Music Monday: Back-End Study Session",
      description: "Tune in for a symphony of coding challenges! Engage your intellect in tackling intriguing LeetCode problems alongside Baruch AIS SWD associate Wylie."
    },
    {
      date: "DEC 20, 2023 - VIRTUAL",
      title: "Hackathon Prep Workshop",
      description: "Gear up for a high-octane workshop focusing on Hackathon strategies, brainstorming sessions, and pro-tips on acing the upcoming Hackathon!"
    },
    {
      date: "DEC 22, 2023 - VIRTUAL",
      title: "Front-End Friday: UI/UX Design Session",
      description: "Craft mesmerizing user experiences! Delve into the depths of UI/UX design principles and hands-on exercises to elevate your Front-End prowess."
    },
    {
      date: "DEC 25, 2023 - VIRTUAL",
      title: "Holiday Special: Coding Challenges and Prizes",
      description: "Celebrate the festive season with thrilling coding challenges and stand a chance to win fabulous prizes! Join us for this coding extravaganza."
    },
    {
      date: "DEC 28, 2023 - VIRTUAL",
      title: "Webinar: Exploring New Frontiers in JavaScript",
      description: "Embark on a journey through the latest advancements and future trends in JavaScript. A must-attend webinar for all JavaScript enthusiasts!"
    },
    {
      date: "DEC 30, 2023 - VIRTUAL",
      title: "Tech Talk: AI in Healthcare",
      description: "Witness the impact of Artificial Intelligence revolutionizing healthcare. Join experts for an enlightening discussion."
    }
    // Add more events in a similar format...
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
        <div className="text-xs font-semibold mb-4">{event.date}</div>
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
            Welcome to Our Community!
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
            Upcoming Events:
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

export default CommunityPage;

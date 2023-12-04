import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import Topbar from "@/components/Topbar/Topbar";

const CommunityPage: React.FC = () => {
  const events = [
    {
      date: "DEC 10, 2023 - VIRTUAL",
      title: "Tuesday Full-Stack Study Session",
      description: "Are you ready to embark on an exciting journey into Full-Stack development? Join us weekly for an immersive and collaborative learning experience as we go through the Full-Stack Chapter—TOGETHER!"
    },
    {
      date: "DEC 12, 2023 - VIRTUAL",
      title: "Live Course | ChatGPT & Generative AI",
      description: "Let's gather round' and put our noggins to good use as we tackle one or more LeetCode problems! Hosted by Baruch AIS SWD associate Wylie!"
    },
    {
      date: "DEC 15, 2023 - VIRTUAL",
      title: "LeetCode Session #5",
      description: "Are you ready to embark on an exciting journey into full-stack development? Join us weekly for an immersive and collaborative learning experience as we go through the Full-Stack Chapter—TOGETHER!"
    },
    {
      date: "DEC 18, 2023 - VIRTUAL",
      title: "Music Monday: Back-End Study Session",
      description: "Let's gather round' and put our noggins to good use as we tackle one or more LeetCode problems! Hosted by Baruch AIS SWD associate Wylie!"
    },
    {
      date: "DEC 18, 2023 - VIRTUAL",
      title: "Tuesday Full-Stack Study Session",
      description: "Are you ready to embark on an exciting journey into Full-Stack development? Join us weekly for an immersive and collaborative learning experience as we go through the Full-Stack Chapter—TOGETHER!"
    },
    {
      date: "DEC 18, 2023 - VIRTUAL",
      title: "Live Course | ChatGPT & Generative AI",
      description: "Let's gather round' and put our noggins to good use as we tackle one or more LeetCode problems! Hosted by Baruch AIS SWD associate Wylie!"
    },
    {
      date: "DEC 19, 2023 - VIRTUAL",
      title: "LeetCode Session #5",
      description: "Are you ready to embark on an exciting journey into full-stack development? Join us weekly for an immersive and collaborative learning experience as we go through the Full-Stack Chapter—TOGETHER!"
    },
    {
      date: "DEC 19, 2023 - VIRTUAL",
      title: "Music Monday: Back-End Study Session",
      description: "Let's gather round' and put our noggins to good use as we tackle one or more LeetCode problems! Hosted by Baruch AIS SWD associate Wylie!"
    },
    {
      date: "DEC 20, 2023 - VIRTUAL",
      title: "Hackathon Prep Workshop",
      description: "Join us for an intensive workshop focusing on Hackathon strategies, brainstorming, and project management tips to ace the upcoming Hackathon!"
    },
    {
      date: "DEC 22, 2023 - VIRTUAL",
      title: "Front-End Friday: UI/UX Design Session",
      description: "Get ready to dive deep into the world of UI/UX design principles, best practices, and hands-on exercises to enhance your Front-End skills!"
    },

    {
      date: "DEC 25, 2023 - VIRTUAL",
      title: "Holiday Special: Coding Challenges and Prizes",
      description: "Celebrate the holiday season with exciting coding challenges and win amazing prizes! Join us for this festive coding event."
    },
    {
      date: "DEC 28, 2023 - VIRTUAL",
      title: "Webinar: Exploring New Frontiers in JavaScript",
      description: "Discover the latest advancements and future trends in JavaScript. A must-attend webinar for all JavaScript enthusiasts!"
    },
    {
      date: "DEC 30, 2023 - VIRTUAL",
      title: "Tech Talk: AI in Healthcare",
      description: "Explore the impact of Artificial Intelligence in revolutionizing healthcare. Join experts for an insightful discussion."
    },
    // Add more events in a similar format...
  ];
  
  const eventCards = events.map((event, index) => (
    <div key={index} className="p-4 bg-black rounded-lg shadow-md flex items-center">
      <div>
        <div className="text-xs font-semibold mb-4">{event.date}</div>
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-700">{event.description}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">More Details</button>
      </div>
    </div>
  ));

  return (
    <main>
      <Topbar />
      <div className="bg-gray-900 min-h-screen text-white">
        <div
          className="flex justify-center items-center h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/community-background.jpg")' }}
        >
          {/* Replace "/community-background.jpg" with the actual path to your background image */}
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our Community
          </h1>
        </div>
        <div className="container mx-auto mt-8">
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

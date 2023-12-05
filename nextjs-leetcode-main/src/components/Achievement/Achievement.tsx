import React, { useState } from 'react';
import Image from 'next/image';
import achievementImage1 from './1.png';
import achievementImage2 from './2.png';
import achievementImage3 from './3.png';
import achievementImage4 from './4.png';
import achievementImage5 from './5.png';

const Achievements = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const achievementImages = [achievementImage1, achievementImage2, achievementImage3, achievementImage4, achievementImage5];

  const achievementDescriptions = [
    'Completed your first coding challenge!',
    'Mastered basic syntax and data types.',
    'Built your first project independently.',
    'Debugged a complex program successfully.',
    'Completed one month of consistent coding practice!',
  ];

  return (
    <div>
      <h2 className = "text-2xl mb-4">MY ACHIEVEMENTS</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {achievementImages.map((image, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              opacity: hovered === index ? 0.8 : 0.5,
              transition: 'opacity 0.3s',
              cursor: 'default',
              display: 'inline-block',
              margin: '10px',
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
              <Image src={image} alt={`Achievement ${index + 1}`} width={100} height={100} />
              {hovered === index && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: 0,
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ color: '#000', backgroundColor: '#fff', padding: '5px', borderRadius: '5px' }}>
                    {achievementDescriptions[index]}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

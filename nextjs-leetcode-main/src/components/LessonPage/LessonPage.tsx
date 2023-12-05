// components/LessonPage/LessonPage.tsx
import React from 'react';

export interface LessonData {
  title: string;
  topics: Array<{
    id: number;
    title: string;
    content: string;
    videoId?: string[];
  }>;
  
}

const LessonPage: React.FC<LessonData> = ({ title, topics }) => {
    return (
      <div>
        <h1 className="text-5xl font-bold mb-1">{title}</h1>
        {topics.map((topic) => (
          <div key={topic.id}>
            <h2 className="text-3xl font-semibold mb-2">{topic.title}</h2>
            <div className="mb-4 lesson-content" dangerouslySetInnerHTML={{ __html: topic.content }} />
            {topic.videoId && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Videos</h3>
                <ul className="lesson-list">
                  {topic.videoId.map((videoId, index) => (
                    <li key={index}>
                      <div className="mb-4">
                        <iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Video ${index + 1}`}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <style jsx>{`
          .lesson-content ul {
            list-style-type: disc;
            margin-left: 20px;
          }
          .lesson-list {
            list-style-type: disc;
            margin-left: 20px;
          }
        `}</style>
      </div>
    );
  };
  
  export default LessonPage;
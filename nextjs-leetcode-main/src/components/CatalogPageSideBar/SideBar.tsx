// components/Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  handleLessonSelection: (content: string) => void;
}

interface Lesson {
  id: number;
  title: string;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

const sidebarSections: Section[] = [
    {
      id: "c",
      title: "C",
      lessons: [
        {
          id: 1,
          title: "C Basics",
        },
        {
          id: 12,
          title: "C Control Structures",
        },
        {
          id: 2,
          title: "Advanced C Programming",
        },
        {
          id: 3,
          title: "C Data Structures",
        },
      ],
    },
    {
      id: "python",
      title: "Python",
      lessons: [
        {
          id: 4,
          title: "Python Basics",
        },
        {
          id: 5,
          title: "Python Control Structures",
        },
        {
          id: 6,
          title: "Python Functions and Modules",
        },
        // Add more lessons for Python
      ],
    },
    {
      id: "java",
      title: "Java",
      lessons: [
        {
          id: 7,
          title: "Java Output",
        },
        {
          id: 8,
          title: "Java Object-Oriented Programming (OOP)",
        },
        {
          id: 9,
          title: "Java Exception Handling",
        },
        {
          id: 19,
          title: "Java Multithreading and Concurrency",
        },

        // Add more lessons for Java
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      lessons: [
        {
          id: 19,
          title: "JavaScript Basics",
        },
        {
          id: 20,
          title: "JavaScript Functions and Scope",
        },
        {
          id: 22,
          title: "JavaScript DOM Manipulation",
        },

        // Add more lessons for JavaScript
      ],
    },
    {
      id: "ruby",
      title: "Ruby",
      lessons: [
        {
          id: 24,
          title: "Ruby Basics",
        },
        {
          id: 25,
          title: "Advanced Ruby Programming",
        },
        {
          id: 27,
          title: "Ruby Metaprogramming",
        },

        // Add more lessons for Ruby
      ],
    },
    {
      id: "swift",
      title: "Swift",
      lessons: [
        {
          id: 34,
          title: "Swift Basics",
        },
        // Add more lessons for Swift
      ],
    },
    {
      id: "typescript",
      title: "TypeScript",
      lessons: [
        {
          id: 40,
          title: "TypeScript Basics",
        },
        // Add more lessons for TypeScript
      ],
    },
    // Repeat the structure for other programming languages (Python, Java, JavaScript, Ruby, PHP)
];

const SideBar: React.FC<SidebarProps> = ({ handleLessonSelection }) => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const handleLessonClick = (lessonId: number) => {
    setSelectedLesson(lessonId);
  };

  return (
    <aside className="mt-12 w-1/6 h-screen overflow-y-auto fixed bg-gray-800 p-4">
      <div className="space-y-2">
        {sidebarSections.map((section) => (
          <div key={section.id}>
            <a href={`#${section.id}`} className="text-white font-semibold block">
              {section.title}
            </a>
            <ul className="ml-2 space-y-2">
            {section.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={`/lessons/[section]/[lesson]`}
                    as={`/lessons/${section.id}/${lesson.title.replace(/\s+/g, '-')}`}
                    className="text-xm block py-1 pl-3 hover:bg-gray-400 rounded-md"
                    onClick={() => {
                      handleLessonClick(lesson.id);
                      handleLessonSelection(lesson.title);
                    }}
                  >
                    {lesson.title}
                  </Link>
                  {selectedLesson === lesson.id && (
                    <p className="text-white pl-6">{/* Display content of the selected lesson here */}</p>
                  )}
                </li>
))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
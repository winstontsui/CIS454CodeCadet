import React from 'react';

interface SidebarProps {
  // You can remove the sidebarSections prop since it's defined internally
}

const SideBar: React.FC<SidebarProps> = () => {
    const sidebarSections = [
        {
          id: 'c',
          title: 'C',
          lessons: [
            { id: 1, title: 'C Basics' },
            { id: 2, title: 'Functions in C' },
            { id: 3, title: 'Pointers in C' },
            { id: 4, title: 'Arrays in C', url: 'https://www.w3schools.com/c/c_for_loop.php' },
            { id: 5, title: 'Structures in C' },
            { id: 6, title: 'File Handling in C' },
            { id: 7, title: 'Dynamic Memory Allocation in C' },
            // Add more lessons for C as needed
          ]
        },
        {
          id: 'python',
          title: 'Python',
          lessons: [
            { id: 8, title: 'Python Basics' },
            { id: 9, title: 'Python Functions' },
            { id: 10, title: 'Python Data Types' },
            { id: 11, title: 'Loops in Python' },
            { id: 12, title: 'Python Strings' },
            { id: 13, title: 'Python Lists' },
            // Add more lessons for Python as needed
          ]
        },
        {
          id: 'java',
          title: 'Java',
          lessons: [
            { id: 14, title: 'Java Output' },
            { id: 15, title: 'Java Comments' },
            { id: 16, title: 'Java Variables' },
            { id: 17, title: 'Java Data Types' },
            { id: 18, title: 'Java Operators' },
            // Add more lessons for Java as needed
          ]
        },
        {
          id: 'javascript',
          title: 'JavaScript',
          lessons: [
            { id: 19, title: 'JavaScript Basics' },
            { id: 20, title: 'Functions in JavaScript' },
            { id: 21, title: 'JavaScript Variables' },
            { id: 22, title: 'Loops in JavaScript' },
            { id: 23, title: 'JavaScript Objects' },
            // Add more lessons for JavaScript as needed
          ]
        },
        {
          id: 'ruby',
          title: 'Ruby',
          lessons: [
            { id: 24, title: 'Ruby Basics' },
            { id: 25, title: 'Ruby Methods' },
            { id: 26, title: 'Ruby Classes' },
            { id: 27, title: 'Ruby Modules' },
            { id: 28, title: 'Ruby Blocks' },
            // Add more lessons for Ruby as needed
          ]
        },
        {
          id: 'php',
          title: 'PHP',
          lessons: [
            { id: 29, title: 'PHP Basics' },
            { id: 30, title: 'PHP Functions' },
            { id: 31, title: 'PHP Variables' },
            { id: 32, title: 'Loops in PHP' },
            { id: 33, title: 'PHP Arrays' },
            // Add more lessons for PHP as needed
          ]
        },
        // Add more coding languages with their lessons here
      ];

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
                  <a
                    href={`#/lesson/${lesson.id}`}
                    className="text-xs block py-1 pl-3 hover:bg-gray-400 rounded-md"
                  >
                    {lesson.title}
                  </a>
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
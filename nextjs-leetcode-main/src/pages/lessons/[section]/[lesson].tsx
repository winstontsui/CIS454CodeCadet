// pages/lessons/[section]/[lesson].tsx

import React from 'react';
import { useRouter } from 'next/router';
import LessonPage, { LessonData } from '@/components/LessonPage/LessonPage';
import Topbar from "@/components/Topbar/Topbar";
import SideBar from '@/components/CatalogPageSideBar/SideBar';
import cBasicsData from '@/data/cBasicsData';
import cControlStructures from '@/data/cControlStructures';
import advancedCProgramming from '@/data/advancedCProgramming';
import cDataStructures from '@/data/cDataStructures';
import pythonBasics from '@/data/pythonBasics';
import pythonControlStructures from '@/data/pythonControlStructures';
import pythonFunctionsAndModules from '@/data/pythonFunctionsAndModules';
import javaOutput from '@/data/javaOutput';
import javaOOP from '@/data/javaOOP';
import javaExceptionHandling from '@/data/javaExceptionHandling';
import javaMultithreadingAndConcurrency from '@/data/javaMultithreadingAndConcurrency';
import javascriptBasics from '@/data/javascriptBasics';
import javascriptFunctionsAndScope from '@/data/javascriptFunctionsAndScope';
import javascriptDOMManipulation from '@/data/javascriptDOMManipulation';
import rubyBasics from '@/data/rubyBasics';
import advancedRubyProgramming from '@/data/advancedRubyProgramming';
import rubyMetaProgramming from '@/data/rubyMetaprogramming';
import swiftBasics from '@/data/swiftBasics';
import typescriptBasics from '@/data/typescriptBasics';


const lessonComponents: Record<string, LessonData> = {
  'c-C-Basics': cBasicsData,
  'c-C-Control-Structures': cControlStructures,
  'c-Advanced-C-Programming': advancedCProgramming,
  'c-C-Data-Structures': cDataStructures,
  'python-Python-Basics': pythonBasics,
  'python-Python-Control-Structures': pythonControlStructures,
  'python-Python-Functions-and-Modules': pythonFunctionsAndModules,
  'java-Java-Output': javaOutput,
  'java-Java-Object-Oriented-Programming-(OOP)': javaOOP,
  'java-Java-Exception-Handling': javaExceptionHandling,
  'java-Java-Multithreading-and-Concurrency': javaMultithreadingAndConcurrency,
  'javascript-JavaScript-Basics': javascriptBasics,
  'javascript-JavaScript-Functions-and-Scope': javascriptFunctionsAndScope,
  'javascript-JavaScript-DOM-Manipulation': javascriptDOMManipulation,
  'ruby-Ruby-Basics': rubyBasics,
  'ruby-Advanced-Ruby-Programming': advancedRubyProgramming,
  'ruby-Ruby-Metaprogramming': rubyMetaProgramming,
  'swift-Swift-Basics': swiftBasics,
  'typescript-TypeScript-Basics': typescriptBasics,
  // Add entries for other lessons
};

const DynamicLesson: React.FC = () => {
  const router = useRouter();
  const { section, lesson } = router.query;

  // Fetch the lesson data based on the dynamic route parameters
  const getLessonData = (): LessonData => {
    const lessonKey = `${section}-${lesson}`;
    return lessonComponents[lessonKey] || {
      title: 'Lesson Not Found',
      topics: [{ id: 1, title: 'Sorry, the requested lesson was not found.', content: '' }],
    };
  };

  const lessonData = getLessonData();

  return (
    <main>
      <Topbar />
      <div className="bg-purple-200 min-h-screen text-white flex">
        <SideBar handleLessonSelection={(content: string) => console.log(content)} />
        <div className="flex-grow p-24 ml-72 text-black">
          <LessonPage {...lessonData} />
        </div>
      </div>
    </main>);
};

export default DynamicLesson;
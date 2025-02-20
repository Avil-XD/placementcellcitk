"use client";
import CardOne from "@/components/whycitk/cardone";
import CardTwo from "@/components/whycitk/cardtwo";
import { useState } from "react";

const SECTIONS = [
  'Academics',
  'Admission Criteria',
  'Faculty',
  'R&D Activities',
  'Student Clubs',
  'Industrial Training',
  'Infrastructure',
  'Library'
] as const;

type Section = (typeof SECTIONS)[number];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState<Section>("Academics");

  const renderSection = () => {
    const LinkButton = ({ href, text }: { href: string; text: string }) => (
      <div className="flex justify-center mt-8">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white text-center shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          {text}
        </a>
      </div>
    );

    const sections: Record<Section, JSX.Element> = {
      'Academics': <CardOne />,
      'Admission Criteria': (
        <div>
          <CardTwo
            paragraphs={[
              "The institution offers a broad spectrum of educational programs tailored to various interests and career goals. At the diploma level, students can pursue specialized courses in Engineering, Animation and Multimedia, with a range of intake capacities for each field.",
              "For postgraduate studies, the institution provides Master of Technology (M. Tech) programs in areas such as Water Resources, Green Energy Technology, and Food Engineering, as well as a Master of Design (M. Des) in Multimedia Communication and Design.",
            ]}
          />
          <LinkButton 
            href="/information_brouchure_diploma_degree_master_phd2024 (1).pdf"
            text="Download Information Brochure"
          />
        </div>
      ),
      'Faculty': (
        <CardTwo
          paragraphs={[
            "The Institute is privileged to host faculty who have distinguished themselves as teachers, researchers, and consultants of extraordinary calibre.",
            "Apart from delivering quality education, they motivate students to engage in cutting-edge research and are highly inclined towards ideation and innovation.",
          ]}
        />
      ),
      'R&D Activities': (
        <div>
          <CardTwo
            paragraphs={[
              "At CIT Kokrajhar, a vibrant array of research projects reflects the institution's commitment to advancing knowledge across various fields.",
              "The academic community at CIT Kokrajhar is distinguished by its prolific output, with over 400 peer-reviewed publications accumulating 4800 citations in the past four years.",
            ]}
          />
          <LinkButton 
            href="https://cit.ac.in/researches"
            text="Explore Our Research"
          />
        </div>
      ),
      'Student Clubs': (
        <div>
          <CardTwo
            paragraphs={[
              "CITK boasts a vibrant array of clubs, including the Google Developer Student Club, DevCom Club, Cyber Security Club, and many more.",
              "Each club plays a crucial role in enriching campus life, fostering skills, and building a sense of community at CITK.",
            ]}
          />
          <LinkButton 
            href="whycitk/Clubs Serega-new.pdf"
            text="Download Clubs Info"
          />
        </div>
      ),
      'Industrial Training': (
        <div>
          <CardTwo
            paragraphs={[
              "The Training and Placement Cell comprises 5 faculty and 18 student members from various departments.",
              "The cell has facilitated recruitment from 19 companies this year, demonstrating its continued commitment to enhancing career opportunities for CITK students.",
            ]}
          />
          <LinkButton 
            href="16. CITK_T&P_Annual Report.docx"
            text="Download Training Report"
          />
        </div>
      ),
      'Infrastructure': (
        <div>
          <CardTwo
            paragraphs={[
              "CITK boasts one of the most advanced infrastructures in the North East region, blending modernity with functionality.",
              "The campus features state-of-the-art facilities, including well-equipped laboratories, cutting-edge research centers, and spacious classrooms.",
            ]}
          />
          <LinkButton 
            href="https://www.cit.ac.in/institute-infrastructure"
            text="Explore Our Campus"
          />
        </div>
      ),
      'Library': (
        <div>
          <CardTwo
            paragraphs={[
              "The Central Library spans 22,000 square feet, offering a dynamic learning environment with over 111,000 physical books and 288,000 digital resources.",
              "The library is fully automated with RFID technology and features advanced services including Web OPAC and a mobile app.",
            ]}
          />
          <LinkButton 
            href="http://centrallibrary.cit.ac.in/"
            text="Visit Library Portal"
          />
        </div>
      ),
    };

    return sections[activeComponent] || null;
  };

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-8 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
          Why Recruit at CITK?
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            CIT Kokrajhar fosters a unique environment where academic excellence meets practical innovation. Our students maintain a perfect balance between rigorous academics and enriching co-curricular activities.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With a strong emphasis on research and practical application, our students regularly participate in national conferences and workshops, creating industry-ready graduates with strong leadership potential.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => setActiveComponent(section)}
                className={`px-4 py-3 rounded-lg transition-all duration-200 text-sm md:text-base font-medium ${
                  activeComponent === section
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {renderSection()}
        </div>
      </div>
    </main>
  );
}

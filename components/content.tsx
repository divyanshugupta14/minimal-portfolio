import { FC } from "react";
import RightPanel from "./right-panel";
import Button from "./button";

interface contentProps {}

const ContentSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="relative group hover:bg-neutral-900 p-4 rounded-xl tansition-all duration-500">
      <h1 className="text-4xl font-bold text-neutral-500 group-hover:text-neutral-50">{`<${title}>`}</h1>
      {children}
      <h1 className="flex justify-end text-4xl font-bold text-neutral-800 group-hover:text-neutral-50">
        {`</${title}>`}
      </h1>
    </div>
  );
};
const SkillTag = ({ text }: { text: string }) => {
  return (
    // <div className="group-hover:bg-violet-500 px-4 py-1 text-sm font-medium bg-white rounded-xl dark:bg-neutral-900">
    <div className="group-hover:bg-violet-500 px-4 py-1 text-sm font-medium rounded-2xl border border-b-white group-hover:border-transparent">
      {text}
    </div>
  );
};

const skills = ["HTML", "CSS", "JavaScript", "React", "NextJS", "Tailwind", "SASS", "Git", "Redux-toolkit"];
const Content: FC<contentProps> = ({}) => {
  return (
    <div className="xl:py-10 py-6 flex-grow flex flex-col gap-4">
      {/* About Me */}
      <ContentSection title="about">
        <p className="px-8 mt-4 text-xl text-slate-200">
          I have been sailing the web development seas ever since my student years. I have created everything from
          regular websites and dashboard, all the way to complex charts to visualize data.
          <span className="block mt-4">The motive for work is plain and clear.</span>
          <span className="block text-2xl font-bold mt-4 text-primary">Get stuff done. Fast.</span>
          <span className="block mt-4">
            I write clean and modern JS/TS code with rigid code style, speed is crucial but {"what's"} more important is
            to build apps that scale
          </span>
        </p>
      </ContentSection>
      <ContentSection title="skills">
        <div className="flex items-center gap-3 mt-4 px-8 w-4/6 flex-wrap">
          {skills.map((skill) => (
            <SkillTag key={skill} text={skill} />
          ))}
        </div>
      </ContentSection>
      <ContentSection title="portfolio">
        <RightPanel />
      </ContentSection>
      <ContentSection title="experience">
        <section className="dark:text-gray-100 px-8 mt-4">
          <div className="container max-w-5xl px-4 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">Software Engineer</h3>
                    <h2 className="text-lg font-semibold tracking-wide dark: text-gray-400">
                      Bitcomm Technologies Pvt. Ltd, Noida
                    </h2>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">June 2022 - Present</time>
                    <p className="mt-3">
                      Worked on projects for Indian Railways and Delhi Metro (DMRC) built using React. Building
                      dashboards for analyis of assets installed & their maintenance. Data visualialisation was the main
                      priority here since data was generated frequently. Thus it was important to represent the data
                      visually through a variety of charts.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">Associate Software Engineer</h3>
                    <h2 className="text-lg font-semibold tracking-wide dark: text-gray-400">
                      Synoriq Pvt. Ltd, Jaipur
                    </h2>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Nov 2021 - June 2022</time>
                    <p className="mt-3">
                      Worked on projects for various banks including AU Small Finance Bank, banks are very concerned
                      about their data safety, thus had to built apps in strict environment, worked on projects related
                      to employee management & treasury management. Projects were extensively in React & vanilla
                      javascript
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentSection>

      <ContentSection title="contact">
        <div className="px-8 mt-4 text-xl">
          <span>
            My inbox is always open. Whether you have a question or project or just want to say hi, I will try my best
            to get back to you.
          </span>
          <span className="block mt-2 mb-4">I am open to work as a freelancer.</span>
          <Button text="Say Hello!" color="purple" />
        </div>
      </ContentSection>
    </div>
  );
};

export default Content;

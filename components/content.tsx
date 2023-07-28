import { FC } from "react";

interface contentProps {}

const Content: FC<contentProps> = ({}) => {
  return (
    <div className="xl:py-10 py-6 flex-grow">
      {/* About Me */}
      <div>
        <h1 className="text-4xl font-bold text-slate-50">{"<a little about me >"}</h1>
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
        <h1 className="flex justify-end text-4xl font-bold text-neutral-600">{"</a little about me >"}</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-slate-50">{"<my skills>"}</h1>

        <h1 className="flex justify-end text-4xl font-bold text-neutral-600">{"</my skills>"}</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-slate-50">{"<my portfolio>"}</h1>

        <h1 className="flex justify-end text-4xl font-bold text-neutral-600">{"</my portfolio>"}</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-slate-50">{"<my working career>"}</h1>

        <h1 className="flex justify-end text-4xl font-bold text-neutral-600">{"</my working career>"}</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-slate-50">{"<get in touch>"}</h1>

        <h1 className="flex justify-end text-4xl font-bold text-neutral-600">{"</get in touch>"}</h1>
      </div>
    </div>
  );
};

export default Content;

import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
      <p
        className="ml-1 hidden pb-3 text-sm text-purple-500 md:block md:pb-7 md:text-base"
        data-aos="fade-up"
      >
        Hi, my name is
      </p>
      <h1
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        Andini Azzahra Puspita,
      </h1>
      <h1
        className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        I build things for the web.
      </h1>
      <p
        className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
        data-aos="zoom-in-up"
      >
          I'm a passionate Software Engineering student with a growing interest in System Analysis, UI/UX Design, and Project Management. 
          I love creating structured solutions, designing meaningful user experiences, and leading teams to achieve impactful results.
      </p>
      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="rounded-[4px] border-2 border-purple-500 px-7 py-5 text-purple-500 transition-all duration-300 hover:bg-purple-400 hover:bg-opacity-10"
          href="https://drive.google.com/drive/folders/1bzMl1xyiEZ5ELN5A3GbgKAQgsPUG6nM7?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>View my cv here!</button>
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;

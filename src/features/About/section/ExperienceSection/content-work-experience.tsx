import Link from "next/link";

export const ContentWorkExperience = () => {
  return (
    <div className="flex flex-col gap-8 text-primary">
      <div>
        <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
          No Work Experience Yet
        </h3>
        <p className="pb-5 font-mono text-sm lg:text-base">Currently</p>
        <div className="flex flex-col gap-4 text-sm leading-relaxed lg:text-base">
          <p>
            I currently do not have any professional work experience. However, I have worked on several personal and group projects that demonstrate my skills and capabilities. Please feel free to check out my projects as proof of what I can do.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/projects"
            className="inline-block rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-700"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

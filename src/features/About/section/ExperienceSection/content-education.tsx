export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Junior High School
        <span className="text-base text-purple-500">
          {" "}
          @
          <a
            className="text-underline"
          >
            SMP Negeri 4 Depok
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">2020 - 2023</p>
      <ul className="flex flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
            During junior high school, I began developing an interest in how technology shapes 
            our daily lives. This curiosity led me to explore basic programming and digital tools, 
            which eventually inspired my decision to continue my education in a more technical and 
            focused direction. 
        </li>
      </ul>
<br />
            <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
         High School
        <span className="text-base text-purple-500">
          {" "}
          @
          <a
            href="https://smktarunabhakti.sch.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            SMKS Taruna Bhakti
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">2023 - 2026</p>
      <ul className="flex flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          Currently pursuing a major in Software Engineering, I chose this path 
          with the belief that technology will continue to transform industries. 
          I'm committed to learning how to analyze systems, develop applications, 
          and contribute to tech-driven innovation in the future.
        </li>
      </ul>
    </div>
  );
};

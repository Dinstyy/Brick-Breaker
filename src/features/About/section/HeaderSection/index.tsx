import type { FC } from "react";
import Image from "next/image";
import ulin from "@images/me.jpg";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-purple-500 lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
              Hello! I’m Andini Azzahra Puspita, a 12th-grade student majoring in Software Engineering at 
              SMK Taruna Bhakti. I’m passionate about analyzing systems and designing structured solutions, 
              which is why I’m aiming to pursue a role as a <span className="text-purple-500">System Analyst.</span>
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
              I also have a strong interest in <span className="text-purple-500">UI/UX Design.</span> I’m very detail oriented — For me, 
              design isn’t just about appearance it’s about creating an experience that feels right.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
              In addition, I’m also a <span className="text-purple-500">Project Manager.</span> I often take the lead in group projects 
              and naturally step into leadership roles. I enjoy organizing tasks, guiding the team, and making sure goals are 
              met efficiently.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
               While I’m still growing, I’m proactive in learning through projects and self-study. 
               I believe that a great system isn’t just about how it works, but how well it helps people — 
               and that’s the impact I want to create in my future role.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={ulin}
            alt="dinstyy"
            height={1000}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Cakrawala University",
      link: "https://www.cakrawala.ac.id/",
      certificate: [
        {
          name: "Mini Degree - Faculty of Computer Science Series",
          link: "https://drive.google.com/file/d/1wo21Y02a-qtJLfpD-kKuLdKzRUtwrOVk/view?usp=sharing",
        },
      ],
    },
    {
      type: "Short Class",
      name: "MySkill",
      link: "https://myskill.id/",
      certificate: [
        {
          name: "Data Science Introduction",
          link: "https://drive.google.com/file/d/1zxvSIohXIJ0y_idrfESrq1v7TrH4Cvl-/view?usp=sharing",
        },
      ],
    },
    {
      type: "Uji Level",
      name: "SMK Taruna Bhakti",
      certificate: [
        {
          name: "Uji Level Kelas X (Website Berita)",
          link: "https://drive.google.com/file/d/18YI-fksMdsDVmyMPRmLrdgqHLITo109N/view?usp=sharing",
        },
        {
          name: "Uji Level Kelas XI (Sisfo Sarpras)",
          link: "https://drive.google.com/file/d/1DnJK8_Qq-tY7LMxRVY-PG_ucke0MVrYK/view?usp=sharing",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-purple-500">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-purple-500 md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

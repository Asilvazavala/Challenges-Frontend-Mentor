import SectionContainer from "./SectionContainer";
import { footerData, icons } from "../../../utils/FooterData";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <SectionContainer
      className="bg-VeryDarkViolet text-white py-14 flex justify-center items-center 
    flex-col gap-y-10 lg:flex-row lg:justify-between lg:items-start lg:gap-x-4"
    >
      <Link href="/">
        <Image
          src="/images/logoWhite.svg"
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>

      {footerData.map(({ titles }, index) => (
        <aside
          key={index}
          className="flex justify-center flex-col gap-8 lg:gap-24 lg:flex-row"
        >
          {Object.keys(titles).map((sectionTitle, sectionIndex) => (
            <div key={sectionIndex}>
              <p className="font-bold text-xl mb-3">{sectionTitle}</p>
              {titles[sectionTitle].map((link, linkIndex) => (
                <span
                  key={linkIndex}
                  className="text-GrayishViolet cursor-pointer font-bold 
                lg:hover:text-Cyan transition w-fit flex min-w-[130px] mb-1"
                >
                  <Link href={link.link}>{link.name}</Link>
                </span>
              ))}
            </div>
          ))}
        </aside>
      ))}

      <div className="flex flex-col gap-2">
        <aside className="flex gap-x-6">
          {icons.map(({ name, image, link }) => (
            <Link key={name} href={link} target="_blank" rel="noopener">
              <Image
                className="cursor-pointer w-9 h-9 hover:lg:scale-125 transition"
                src={image}
                alt={name}
                width={50}
                height={50}
              />
            </Link>
          ))}
        </aside>
        <span className="text-GrayishViolet text-center">
          Made by{" "}
          <Link
            href="https://as-work.vercel.app/"
            target="_blank"
            className="underline lg:hover:text-gray-500 transition"
          >
            Antonio Silva
          </Link>
        </span>
      </div>
    </SectionContainer>
  );
};

export default Footer;

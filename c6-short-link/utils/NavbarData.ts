interface navbarLinksProps {
  title: string;
  link: string;
  icon: string;
}

export const navbarLinks: navbarLinksProps[] = [
  {
    title: "Features",
    link: "/#features",
    icon: "/imagenes/Navbar/HomeIcon.svg",
  },
  {
    title: "Pricing",
    link: "/pricing",
    icon: "/imagenes/Navbar/ExperienceIcon.svg",
  },
  {
    title: "Resources",
    link: "/#resources",
    icon: "/imagenes/Navbar/ProjectsIcon.svg",
  },
];

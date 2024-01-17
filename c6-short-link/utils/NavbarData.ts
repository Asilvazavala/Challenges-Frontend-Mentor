interface navbarLinksProps {
  title: string;
  link: string;
  icon: string;
  needsAuthentication: boolean;
}

export const navbarLinks: navbarLinksProps[] = [
  {
    title: "Features",
    link: "/#features",
    icon: "/imagenes/Navbar/HomeIcon.svg",
    needsAuthentication: false,
  },
  {
    title: "Pricing",
    link: "/pricing",
    icon: "/imagenes/Navbar/ExperienceIcon.svg",
    needsAuthentication: false,
  },
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: "/imagenes/Navbar/ProjectsIcon.svg",
    needsAuthentication: true,
  },
];
